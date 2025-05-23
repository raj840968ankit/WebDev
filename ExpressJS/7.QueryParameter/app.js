import express from 'express'  
import path from 'path'

const app = express()

const staticFilePath = path.join(import.meta.dirname, "public")

app.use('/tictactoe', express.static(staticFilePath))

app.get('/', (req, res) => {
    res.send(`<h1>Home page</h1>`)
})

//example for single query parameter
app.get('/product', (req, res) => {
    console.log(req.query);
    //after giving '/product?search=xiaomi' in url
    res.send(`<h1>User search for ${req.query.search}</h1>`)  
})

//example for multiple query parameter
app.get('/book', (req, res) => {
    console.log(req.query);
    //after giving '/book?book=adventure&author=ankit' in url
    res.send(`<h1>User search for ${req.query.book} book written by ${req.query.author}</h1>`)  
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})