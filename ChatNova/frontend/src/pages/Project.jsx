import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../config/axios.js";
import {
    initializeSocket,
    receiveMessage,
    sendMessage,
} from "../config/socket.js";
import { useContext } from "react";
import { UserContext } from "../context/user.context.jsx";
import Markdown from "markdown-to-jsx";
import hljs from "highlight.js";
import { getWebContainer } from "../config/webContainer.js";


function SyntaxHighlightedCode(props) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current && props.className?.includes("lang-") && window.hljs) {
            window.hljs.highlightElement(ref.current);

            // hljs won't reprocess the element unless this attribute is removed
            ref.current.removeAttribute("data-highlighted");
        }
    }, [props.className, props.children]);

    return <code {...props} ref={ref} />;
}

export const Project = () => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [users, setUsers] = useState([]);
    const [usersWithProjects, setUsersWithProjects] = useState([]); // State to hold users with projects
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]); // <-- Array for all messages
    const { user } = useContext(UserContext);
    const messageBox = useRef();
    const [fileTree, setFileTree] = useState({});
    const [currentFile, setCurrentFile] = useState(null);
    const [openFiles, setOpenFiles] = useState([]);
    const [webContainer, setWebContainer] = useState(null)
    const [iframeUrl, setIframeUrl] = useState(null)
    const [runProcess, setRunProcess] = useState(null)

    const location = useLocation();

    useEffect(() => {
        // Fetch users from the backend
        const fetchUsers = async () => {
            try {
                const response = await axios.get("/users/all");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();

        initializeSocket(location.state.project._id);

        if (!webContainer) {
            getWebContainer().then(container => setWebContainer(container))
            console.log("container started");

        }

        receiveMessage("server-message", ({ message, sender }) => {
            appendIncomingMessage({ message, sender: sender.email });
        });

        receiveMessage("server-ai-message", ({ aiResult, sender }) => {

            const message = JSON.parse(aiResult);
            // Ensure message.fileTree is an object before mounting and setting state
            const receivedFileTree = message.fileTree || {};
            webContainer?.mount(receivedFileTree)

            //webContainer?.mount(message.fileTree)

            // Merge with existing fileTree
            setFileTree(prev => {
                const merged = { ...prev, ...receivedFileTree };
                // Optionally save merged fileTree to DB here
                saveFileTree(merged);
                return merged;
            });
            appendAIMessage({ message, sender });
        });
    }, [location.state]);

    // Fetch users with projects (collaborators) on mount and when project changes
    useEffect(() => {
        const fetchUsersWithProjects = async () => {
            try {
                const response = await axios.get(
                    `/projects/get-project/${location.state.project._id}`
                );
                setUsersWithProjects(response.data.users);
                setFileTree(response.data.fileTree)
            } catch (error) {
                console.error("Error fetching users with projects:", error);
            }
        };
        fetchUsersWithProjects();
    }, [location.state.project._id]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    function send() {
        if (!message.trim()) return;
        sendMessage("project-message", {
            message,
            sender: user,
        });
        appendOutgoingMessage({ message, user });
        setMessage("");
    }

    useEffect(() => {
        receiveMessage("file-update", ({ fileName, contents, sender }) => {
            // Optionally, ignore if the sender is the current user
            if (sender === user.email) return;
            setFileTree(prev => ({
                ...prev,
                [fileName]: {
                    file: {
                        contents
                    }
                }
            }));
        });
    }, [user.email]);

    // Handler for selecting/deselecting a user from modal
    const handleSelectUser = (userId) => {
        setSelectedUserIds((prev) =>
            prev.includes(userId)
                ? prev.filter((id) => id !== userId)
                : [...prev, userId]
        );
    };

    // Handler for Add Collaborator button
    const handleAddCollaborator = () => {
        if (selectedUserIds.length === 0) return;

        const addCollaborators = async () => {
            try {
                await axios.put("projects/add-user", {
                    projectId: location.state.project._id,
                    users: selectedUserIds,
                });
                // Refresh collaborators after adding
                const updated = await axios.get(
                    `/projects/get-project/${location.state.project._id}`
                );
                setUsersWithProjects(updated.data.users);
            } catch (error) {
                console.error("Error adding collaborators:", error);
            }
        };

        addCollaborators();
        setIsModalOpen(false);
    };

    // Scroll to the bottom of the message box when a new message is added
    function scrollToBottom() {
        if (messageBox.current) {
            messageBox.current.scrollTop = messageBox.current.scrollHeight;
        }
    }

    // Append incoming user message
    function appendIncomingMessage({ message, sender }) {
        setMessages((prev) => [
            ...prev,
            {
                type: "incoming",
                sender: sender || "Unknown",
                message,
            },
        ]);
    }

    // Append outgoing user message
    function appendOutgoingMessage({ message, user }) {
        setMessages((prev) => [
            ...prev,
            {
                type: "outgoing",
                sender: user.email || "You",
                message,
            },
        ]);
    }

    // Append AI message (rendered as markdown)
    function appendAIMessage({ message, sender }) {
        setMessages((prev) => [
            ...prev,
            {
                type: "ai",
                sender: sender || "AI",
                message,
            },
        ]);
    }

    function saveFileTree(ft) {
        axios.put('/projects/update-file-tree', {
            projectId: location.state.project._id,
            fileTree: ft
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <main className="h-screen w-screen flex overflow-hidden">
            <section className="left flex flex-col h-full min-w-96 bg-slate-300 relative">
                <header className="flex justify-between items-center p-2 px-4 w-full bg-slate-100">
                    <button className="flex gap-2" onClick={() => setIsModalOpen(true)}>
                        <i className="ri-user-add-fill mr-1"></i>
                        <p>Add Collaborators</p>
                    </button>

                    <button
                        className="p-2"
                        onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
                    >
                        <i className="ri-group-fill"></i>
                    </button>
                </header>

                <div className="message-area flex-grow flex flex-col min-h-0">
                    <div
                        ref={messageBox}
                        className="message-box p-1 flex-grow flex flex-col gap-1 overflow-y-auto scrollbar-hide min-h-0"
                        style={{
                            msOverflowStyle: "none",
                            scrollbarWidth: "none",
                        }}
                    >
                        {/* Render messages from state */}
                        {messages.map((msg, idx) => {
                            if (msg.type === "incoming") {
                                return (
                                    <div
                                        key={idx}
                                        className="message max-w-56 flex flex-col p-2 bg-slate-50 w-fit rounded-md"
                                    >
                                        <small className="text-xs opacity-65">{msg.sender}</small>
                                        <p className="text-sm">{msg.message}</p>
                                    </div>
                                );
                            }
                            if (msg.type === "outgoing") {
                                return (
                                    <div
                                        key={idx}
                                        className="ml-auto message max-w-56 flex flex-col p-2 bg-slate-50 w-fit rounded-md"
                                    >
                                        <small className="text-xs opacity-65">{msg.sender}</small>
                                        <p className="text-sm">{msg.message}</p>
                                    </div>
                                );
                            }
                            if (msg.type === "ai") {
                                return (
                                    <div
                                        key={idx}
                                        className="message max-w-80 flex flex-col p-2 w-fit rounded-md border border-blue-200"
                                        style={{ backgroundColor: "#020617" }} // slate-950
                                    >
                                        <small className="text-xs opacity-65 text-white">
                                            {msg.sender}
                                        </small>
                                        <div
                                            className="text-sm markdown-body"
                                            style={{
                                                maxWidth: "20rem",
                                                overflowX: "auto",
                                                overflowY: "visible",
                                                color: "white",
                                            }}
                                        >
                                            <Markdown
                                                options={{
                                                    overrides: {
                                                        code: {
                                                            component: SyntaxHighlightedCode,
                                                        },
                                                    },
                                                }}
                                            >
                                                {msg.message.text}
                                            </Markdown>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>

                    <div className="inputField w-full flex border-t-1 bg-slate-200">
                        <input
                            className="p-2 px-4 border-none outline-none flex-grow"
                            type="text"
                            placeholder="Enter message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && send()}
                        />
                        <button className="px-5 bg-slate-950 text-white" onClick={send}>
                            <i className="ri-send-plane-fill"></i>
                        </button>
                    </div>
                </div>

                <div
                    className={`sidePanel w-full h-full bg-slate-50 flex flex-col gap-2 absolute transition-all ${isSidePanelOpen ? "-translate-x-0" : "-translate-x-full"
                        } top-0 left-0`}
                >
                    <header className="flex justify-between items-center p-2 px-3 bg-slate-200">
                        <h1 className="font-semibold text-lg">Collaborators</h1>

                        <button onClick={() => setIsSidePanelOpen(false)} className="p-2">
                            <i className="ri-close-fill font-semibold"></i>
                        </button>
                    </header>

                    <div className="users flex flex-col gap-2">
                        {usersWithProjects &&
                            usersWithProjects.map(({ email }) => (
                                <div
                                    key={email}
                                    className="user flex items-center gap-2 p-2 px-3 bg-slate-100 rounded-md"
                                >
                                    <div className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white font-bold">
                                        {email[0]}
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm font-semibold">{email}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-md mx-auto p-6 relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <i className="ri-close-line text-2xl"></i>
                            </button>
                            <h2 className="text-xl font-bold mb-4 text-center">
                                Select Users
                            </h2>
                            <ul className="divide-y divide-gray-200 mb-16 max-h-60 overflow-y-auto">
                                {users.map((user) => (
                                    <li
                                        key={user._id}
                                        className={`flex items-center gap-3 p-3 cursor-pointer rounded transition 
                                        ${selectedUserIds.includes(user._id)
                                                ? "bg-blue-100"
                                                : "hover:bg-blue-100"
                                            }`}
                                        onClick={() => handleSelectUser(user._id)}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white font-bold">
                                            {user.email[0]}
                                        </div>
                                        <div>
                                            <div className="font-semibold">{user.email}</div>
                                        </div>
                                        {selectedUserIds.includes(user._id) && (
                                            <span className="ml-auto text-blue-600 font-bold text-lg">
                                                &#10003;
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="absolute left-0 bottom-0 w-full bg-blue-600 text-white py-3 rounded-b-xl font-semibold hover:bg-blue-700 transition"
                                onClick={handleAddCollaborator}
                                disabled={selectedUserIds.length === 0}
                            >
                                Add Collaborator{selectedUserIds.length > 1 ? "s" : ""}
                            </button>
                        </div>
                    </div>
                )}
            </section>
            <style>
                {`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}
            </style>

            <section className="right bg-slate-50 flex-grow h-full flex">
                <div className="explorer h-full max-w-64 min-w-52 bg-slate-200">
                    <div className="fileTree w-full">
                        {Object.keys(fileTree || {}).map((file, index) => {
                            return (
                                <div
                                    onClick={() => {
                                        setCurrentFile(file);
                                        setOpenFiles((prev) =>
                                            prev.includes(file) ? [...prev] : [...prev, file]
                                        );
                                    }}
                                    key={index}
                                    className="tree-element cursor-pointer p-2 px-4 flex items-center gap-2 bg-slate-400 w-full border-1"
                                >
                                    <p className="font-semibold text-lg">{file}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="code-editor flex flex-col flex-grow h-full">
                    <div className="top flex justify-between w-full">
                        <div className="files flex">
                            {openFiles.map((file, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentFile(file)}
                                    className={`open-file cursor-pointer p-2 px-4 flex items-center w-fit gap-2 bg-slate-300 ${currentFile === file ? "bg-slate-400" : ""
                                        }`}
                                >
                                    <p className="font-semibold text-lg">{file}</p>
                                </button>
                            ))}
                        </div>

                        <div className="actions flex gap-2">
                            <button
                                onClick={async () => {
                                    await webContainer.mount(fileTree)


                                    const installProcess = await webContainer.spawn("npm", ["install"])



                                    installProcess.output.pipeTo(new WritableStream({
                                        write(chunk) {
                                            console.log(chunk)
                                        }
                                    }))

                                    if (runProcess) {
                                        runProcess.kill()
                                    }

                                    let tempRunProcess = await webContainer.spawn("npm", ["start"]);

                                    tempRunProcess.output.pipeTo(new WritableStream({
                                        write(chunk) {
                                            console.log(chunk)
                                        }
                                    }))

                                    setRunProcess(tempRunProcess)

                                    webContainer.on('server-ready', (port, url) => {
                                        console.log(port, url)
                                        setIframeUrl(url)
                                    })

                                }}
                                className='p-2 px-4 bg-slate-600 text-white'
                            >
                                run
                            </button>
                        </div>
                    </div>
                    <div className="bottom flex flex-grow h-0">
                        {currentFile && fileTree[currentFile] && fileTree[currentFile].file && (
                            <div className="code-editor-area h-full overflow-auto flex-grow bg-slate-50">
                                <pre className="hljs h-full m-0">
                                    <code
                                        className="hljs h-full outline-none"
                                        contentEditable
                                        suppressContentEditableWarning
                                        onBlur={(e) => {
                                            const updatedContent = e.target.innerText;
                                            const ft = {
                                                ...fileTree,
                                                [currentFile]: {
                                                    file: {
                                                        contents: updatedContent
                                                    }
                                                }
                                            }
                                            setFileTree(ft)
                                            saveFileTree(ft)

                                            // Emit file update to other collaborators
                                            sendMessage("file-update", {
                                                fileName: currentFile,
                                                contents: updatedContent,
                                                projectId: location.state.project._id,
                                                sender: user.email,
                                            });
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: hljs.highlight(
                                                fileTree[currentFile]?.file.contents || '',
                                                { language: 'javascript' }
                                            ).value,
                                        }}
                                        style={{
                                            whiteSpace: "pre-wrap",
                                            paddingBottom: "25rem",
                                            counterSet: "line-numbering",
                                            minHeight: 0,
                                        }}
                                    />
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
                {iframeUrl && webContainer &&
                    (<div className="flex min-w-96 flex-col h-full">
                        <div className="address-bar">
                            <input type="text"
                                onChange={(e) => setIframeUrl(e.target.value)}
                                value={iframeUrl} className="w-full p-2 px-4 bg-slate-200" />
                        </div>
                        <iframe src={iframeUrl} className="w-full h-full"></iframe>
                    </div>)
                }
            </section>
        </main>
    );
};
