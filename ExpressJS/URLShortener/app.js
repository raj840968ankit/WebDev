import path from 'path'
import express from 'express'
import { shortenerRouter } from './routes/shortener.routes.js'


const port = 3001

const app = express()

const appRoot = import.meta.dirname;

//serving static file to the server
app.use(express.static(path.join(appRoot, "public")))

app.use(express.urlencoded({extended : true}))  //parses post request body


app.set('views', path.join(appRoot, "views"))   //manually give path to ejs files(dynamic html)
app.set('view engine', 'ejs')  //using template engine(dynamic html)


app.use((req, res, next) => {    //this middleware executes first then give access to route
    req.appRoot = appRoot
    next();
});
app.use(shortenerRouter)   //using router



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})