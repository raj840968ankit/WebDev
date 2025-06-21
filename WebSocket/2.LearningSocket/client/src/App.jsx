import { useEffect } from 'react';
import { io } from 'socket.io-client'
import './App.css'
import { useState } from 'react';
import { useMemo } from 'react';
export const App = () => {

  const [message, setMessage] = useState('')
  const [room, setRoom] = useState('')
  const [roomId, setRoomId] = useState('')
  const [roomName, setRoomName] = useState('')
  const [messages, setMessages] = useState([])

  const socket = useMemo(() => io('http://localhost:3000'), []);   //!creating socket connection with server

  const joinRoomHandler = (e) => {
    e.preventDefault()
    socket.emit('join-room', roomName)
    setRoomName('')
  }

  useEffect(() => {
    //! listen after establishing connection
    socket.on('connect', () => {
      setRoomId(socket.id)
      console.log('connected', socket.id);
    })

    //!listening welcome message from server
    // socket.on('welcome', (message) => {
    //   console.log(message);
    // })

    //!All clients will receive message from server
    // socket.on('client-receive-message', (serverMessage) => {
    //   console.log(serverMessage);
    // })

    //!A single will receive message from server
    socket.on('message-room-client', (serverMessage) => {
      console.log(serverMessage);
      setMessages((prev) => [...prev, serverMessage])
    })

    //!disconnect from server
    return () => socket.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    // const messageTrim = message.trim()
    // if(messageTrim){                     //!sending message to server after form submission
    //   socket.emit('message', messageTrim)
    //   setMessage('')
    // }

    const messageTrim = message.trim()
    const roomTrim = room.trim()
    if(messageTrim){                     //!sending message to server and then to particular room
      socket.emit('message-room', {message : messageTrim, room : roomTrim})
      setMessage('')
    }
    
  }

  return (
    <div className="container">
      <h1>Socket IO</h1>
      <h2>{roomId}</h2>
      <div className="chat-container">
        <form onSubmit={joinRoomHandler}>
          <h2>Join Room</h2>
          <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} placeholder='Room Name'/>
          <button type='submit'>Join</button>
        </form>

        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} placeholder='room Id'/>
          <button type='submit'>send</button>
        </form>

        <ul>
          {
            messages.map((mess, index) => {
              return <li key={index}>{mess}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}