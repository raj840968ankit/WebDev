import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from '../config/axios.js'
import { initializeSocket, receiveMessage, sendMessage } from "../config/socket.js";
import { useContext } from "react";
import { UserContext } from "../context/user.context.jsx";

export const Project = () => {
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [users, setUsers] = useState([]);
    const [usersWithProjects, setUsersWithProjects] = useState([]); // State to hold users with projects
    const [message, setMessage] = useState(""); // State to hold messages
    const { user } = useContext(UserContext);  //! using user context to get user data
    const messageBox = useRef()

    const location = useLocation();  //! using useLocation to get data passed from navigate in home page


    useEffect(() => {
        // Fetch users from the backend
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/users/all');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();

        initializeSocket(location.state.project._id)  //! creating socket connection when component mounts

        receiveMessage('server-message', ({message, sender}) => {
            appendIncomingMessage({message, sender})
        });
    }, []);

    // Fetch users with projects (collaborators) on mount and when project changes
    useEffect(() => {
        const fetchUsersWithProjects = async () => {
            try {
                const response = await axios.get(`/projects/get-project/${location.state.project._id}`);
                setUsersWithProjects(response.data.users);
            } catch (error) {
                console.error("Error fetching users with projects:", error);
            }
        };
        fetchUsersWithProjects();
    }, [location.state.project._id]);


    function send() {
        sendMessage('project-message', {
            message,
            sender: user,  //! using user context to get user id
        });
        appendOutgoingMessage({message, user})
        setMessage("");  // Clear the message input after sending
    }

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
                // eslint-disable-next-line no-unused-vars
                const response = await axios.put('projects/add-user', {
                    projectId: location.state.project._id,
                    users: selectedUserIds
                });
                // Refresh collaborators after adding
                const updated = await axios.get(`/projects/get-project/${location.state.project._id}`);
                setUsersWithProjects(updated.data.users);
            } catch (error) {
                console.error("Error adding collaborators:", error);
            }
        };

        addCollaborators();
        setIsModalOpen(false);
    };

    // Appends an incoming message to the message box (for demonstration, not used in rendering)
    function appendIncomingMessage({message, sender}) {

        
        if (!messageBox.current) return;
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'max-w-56', 'flex', 'flex-col', 'p-2', 'bg-slate-50', 'w-fit', 'rounded-md');
        
        const small = document.createElement('small');
        small.classList.add('text-xs', 'opacity-65');
        small.textContent = sender.email || 'Unknown';
        
        const p = document.createElement('p');
        p.classList.add('text-sm');
        p.textContent = message;
        
        messageDiv.appendChild(small);
        messageDiv.appendChild(p);
        messageBox.current.appendChild(messageDiv);
    }

    function appendOutgoingMessage({message, user}) {
        if (!messageBox.current) return;
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('ml-auto', 'message', 'max-w-56', 'flex', 'flex-col', 'p-2', 'bg-slate-50', 'w-fit', 'rounded-md');

        const small = document.createElement('small');
        small.classList.add('text-xs', 'opacity-65');
        small.textContent = user.email || 'You';

        const p = document.createElement('p');
        p.classList.add('text-sm');
        p.textContent = message;

        messageDiv.appendChild(small);
        messageDiv.appendChild(p);
        messageBox.current.appendChild(messageDiv);
    }

    return (
        <main className="h-screen w-screen flex">
            <section className="flex flex-col left h-full min-w-96 bg-slate-300 relative">
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

                <div className="message-area flex-grow flex flex-col">
                    <div ref={messageBox} className="message-box p-1 flex-grow flex flex-col gap-1 overflow-auto mah-h-full">
        
                    </div>

                    <div className="inputField w-full flex border-t-1 bg-slate-200">
                        <input
                            className="p-2 px-4 border-none outline-none flex-grow"
                            type="text"
                            placeholder="Enter message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && send()}
                        />
                        <button className="px-5 bg-slate-950 text-white"
                            onClick={send}
                        >
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
                        {
                            usersWithProjects && usersWithProjects.map(({email}) => (
                                <div key={email} className="user flex items-center gap-2 p-2 px-3 bg-slate-100 rounded-md">
                                    <div className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white font-bold">
                                        {email[0]}
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm font-semibold">{email}</p>
                                    </div>
                                </div>
                            ))
                        }
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
                            <h2 className="text-xl font-bold mb-4 text-center">Select Users</h2>
                            <ul className="divide-y divide-gray-200 mb-16 max-h-60 overflow-y-auto">
                                {users.map((user) => (
                                    <li
                                        key={user._id}
                                        className={`flex items-center gap-3 p-3 cursor-pointer rounded transition 
                                        ${selectedUserIds.includes(user._id) ? "bg-blue-100" : "hover:bg-blue-100"}`}
                                        onClick={() => handleSelectUser(user._id)}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-white font-bold">
                                            {user.email[0]}
                                        </div>
                                        <div>
                                            <div className="font-semibold">{user.email}</div>
                                        </div>
                                        {selectedUserIds.includes(user._id) && (
                                            <span className="ml-auto text-blue-600 font-bold text-lg">&#10003;</span>
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
        </main>
    );
};
