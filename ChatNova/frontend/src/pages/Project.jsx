import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Project = () => {
    const[isSidePanelOpen, setIsSidePanelOpen] = useState(false); // State to manage side panel visibility

    const location = useLocation(); //! Get the location object to access state passed from Home page
    console.log(location.state);

    return (
        <main className="h-screen w-screen flex">
            <section className="flex flex-col left h-full min-w-72 bg-slate-300 relative">
                <header className="flex justify-end p-2 px-4 w-full bg-slate-100">
                    <button className="p-2" onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}>
                        <i className="ri-group-fill"></i>
                    </button>
                </header>
                <div className="message-area flex-grow flex flex-col">
                    <div className="message-box p-1 flex-grow flex flex-col gap-1">
                        <div className="message max-w-56 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
                            <small className="text-xs opacity-65">example@gmail.com</small>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="ml-auto message max-w-56 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
                            <small className="text-xs opacity-65">example@gmail.com</small>
                            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="inputField w-full flex border-t-1">
                        <input className="p-2 px-4 border-none outline-none" type="text" placeholder="Enter message"/>
                        <button className="flex-grow px-3"><i className="ri-send-plane-fill"></i></button>
                    </div>
                </div>

                <div className={`sidePanel w-full h-full bg-slate-50 flex flex-col gap-2 absolute transition-all ${isSidePanelOpen ? '-translate-x-0' : '-translate-x-full'} top-0 left-0`}>
                    <header className="flex justify-end p-2 px-3 bg-slate-200">
                        <button onClick={() => setIsSidePanelOpen(false)} className="p-2">
                            <i class="ri-close-fill"></i>
                        </button>
                    </header>

                    <div className="users flex flex-col gap-2">
                        <div className="user flex gap-2 items-center cursor-pointer">
                            <div className="aspect-square rounded-full w-fit h-fit flex items-center justify-center p-5 text-white bg-slate-600">
                                <i class="ri-user-3-fill absolute"></i>
                            </div>

                            <h1 className="font-semibold text-lg">Username</h1>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}