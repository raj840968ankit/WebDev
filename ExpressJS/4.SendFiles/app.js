import express from 'express'  
import path from 'path'



const app = express()

const staticPath = path.join(import.meta.dirname, "public")
app.use(express.static(staticPath))  //middleware of express - used to send static files (e.g. html, css, js etc)

app.get('/', (req, res) => {
    //sending a file
    const filePath = path.join(import.meta.dirname, "public", "index.html") //import.meta.dirname will give directory absolute path
    res.sendFile(filePath)
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})