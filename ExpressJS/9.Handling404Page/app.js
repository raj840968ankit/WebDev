import express from 'express'
import path from 'path'

const app = express()




app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`)
});

app.use((req,res) => {     //handling 404 error when file not found
    // return res.status(404).send("page not found")

    return res.status(404).sendFile(path.join(import.meta.dirname, "views", "index.html"))
});
const port = 3001
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})