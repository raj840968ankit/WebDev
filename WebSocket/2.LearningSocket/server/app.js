import express from 'express'
import {Server} from 'socket.io'
import {createServer} from 'http'

const PORT = 3000

const app = express()

const server = createServer(app)   //! created server of http

const io = new Server(server)    //! created io instance

app.get('/', (req, res) => {
    res.send(`<h1>hello world</h1>`)
})

//!creating io circuit here
io.on('connection', (socket) => {
    console.log('user connected');
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})