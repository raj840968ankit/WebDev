import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'
import cors from 'cors'

const PORT = 3000

const app = express()

const server = createServer(app)   //! created server of http

const io = new Server(server, {    //! created io server instance and client connection
    cors: {
        origin: 'http://localhost:5173',    //frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
})


//!.... VVI (for normal frontend and backend connection)
app.use(cors({
    origin: 'http://localhost:5173',    //frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


app.get('/', (req, res) => {
    res.send(`<h1>hello world</h1>`)
})



//!creating io circuit here so that multiple client can connect
io.on('connection', (socket) => {
    //!Whenever client connect then this will show new client id
    console.log('user connected : ',socket.id);
    
    //!sending welcome message to all the clients
    socket.emit('welcome', `Welcome to the server ${socket.id}`)

    //!sending welcome message to all the clients except particular client after refreshing current client page
    //? this is essential for client connection known by other client connect the room
    socket.broadcast.emit('welcome', `${socket.id} joined the server`)

    //! disconnect event listen when client will trigger server.disconnect() 
    socket.on('disconnect', () => {
        console.log(`User disconnected : ${socket.id}`);
    })

    //! listening message from client through UI
    socket.on('message', (message) => {
        console.log(message);
    })
})



server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})