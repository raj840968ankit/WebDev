import {io} from 'socket.io-client';

let socketInstance = null;

export const initializeSocket = (projectId) => {
    socketInstance = io(import.meta.env.VITE_API_URL, {
        auth : {
            token: localStorage.getItem('token') || ''
        },
        query: {
            projectId
        },
    });
    return socketInstance;
}

export const receiveMessage = (eventName, callback) => {
    if (!socketInstance) {
        console.error("Socket not initialized");
        return;
    }
    socketInstance.on(eventName, callback);
};

export const sendMessage = (eventName, data) => {
    if (!socketInstance) {
        console.error("Socket not initialized");
        return;
    }
    socketInstance.emit(eventName, data);
};