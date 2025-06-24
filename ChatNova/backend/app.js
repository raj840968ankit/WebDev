import express from 'express'
import 'dotenv/config'
import { chatNovaRouter } from './routes/chatnova.routes.js'
import morgan from 'morgan'
import { connect } from './config/db.js'

await connect()

const app = express()

app.use(morgan('dev'))  //!logs every http request

//!When you send data from the frontend (like via fetch or axios) with Content-Type: application/json
app.use(express.json())

app.use(express.urlencoded({extended : true}))  //parses post request body

app.use(chatNovaRouter)

export {app};  //exported to use socket.io in server.js