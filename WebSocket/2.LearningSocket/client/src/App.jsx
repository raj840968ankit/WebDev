import { useEffect } from 'react';
import { io } from 'socket.io-client'
import './App.css'
import { useState } from 'react';
import { useMemo } from 'react';
export const App = () => {

  const[message, setMessage] = useState('')

  const socket = useMemo(() => io('http://localhost:3000'), []);   //!creating socket connection with backend

  useEffect(() => {
    //! listen after establishing connection
    // socket.on('connect', () => {
    //   console.log('connected', socket.id);
    // })

    //!listening welcome message from server
    socket.on('welcome', (message) => {
      console.log(message);
    })

    //!disconnect from server
    return () => socket.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const messageTrim = message.trim()
    if(messageTrim){                     //!sending message to server after form submission
      socket.emit('message', messageTrim)
      setMessage('')
    }
  }

  return (
    <div className="container">
      <h1>Socket IO</h1>
      <div className="chat-container">
        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button type='submit'>send</button>
        </form>
      </div>
    </div>
  )
}