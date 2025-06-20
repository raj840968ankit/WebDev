import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import {CssBaseline} from '@mui/material'   //! CSSBaseline will add initial css, margin, padding = 0

createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline/>
    <App />
  </>,
)
