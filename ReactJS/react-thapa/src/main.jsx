import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Profile } from './components/Profile'
import './index.css'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* {<Profile/>} */}
  </StrictMode>,
)
