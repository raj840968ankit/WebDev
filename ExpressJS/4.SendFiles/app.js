import express from 'express'  
import path from 'path'



const app = express()

const staticPath = path.join(import.meta.dirname, "public")

app.use(express.static(staticPath))  //middleware of express - used to send static files (e.g. html, css, js etc)
//or upper used middleware is by default on home page of server
//app.use('/public', express.static(staticFilePath))  //can be accessed by (e.g. http://localhost:3000/public)

app.get('/', (req, res) => {
    //sending a file
    const filePath = path.join(import.meta.dirname, "public", "index.html") //import.meta.dirname will give directory absolute path
    res.sendFile(filePath)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})