import express from 'express'
import 'dotenv/config'
import { userRoutes } from './routes/user.routes.js'
import morgan from 'morgan'
import { connect } from './config/db.js'
import cookieParser from 'cookie-parser'

await connect();

const app = express()

app.use(morgan('dev'))  //!logs every http request

//!When you send data from the frontend (like via fetch or axios) with Content-Type: application/json
app.use(express.json())

app.use(express.urlencoded({extended : true}))  //parses post request body

app.use(cookieParser())  //parses cookies from the request


app.use('/users', userRoutes)  //user routes

app.get('/' , (req, res) => {
   return res.send('hello')
})

export {app};  //exported to use socket.io in server.js