import path from 'path'
import express from 'express'
import { shortenerRouter } from './routes/shortener.routes.js'
import {env} from './config/env.js'
import { authRouter } from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import { verifyAuthentication } from './middlewares/verify.auth.middleware.js'

const app = express()

const appRoot = import.meta.dirname;

//serving static file to the server
app.use(express.static(path.join(appRoot, "public")))

app.use(express.urlencoded({extended : true}))  //parses post request body

app.use(cookieParser())   //use cookie parser early

//use verifyAuthentication middleware just after cookie parser
app.use(verifyAuthentication)   //for verification of JWT token

app.set('views', path.join(appRoot, "views"))   //manually give path to ejs files(dynamic html)
app.set('view engine', 'ejs')  //using template engine(dynamic html)


app.use((req, res, next) => {    //this middleware executes first then give access to route
    req.appRoot = appRoot
    next();
});

app.use(authRouter)

app.use(shortenerRouter)   //using router


app.listen(env.PORT, () => {
    console.log(`Server running at http://localhost:${env.PORT}`)
})