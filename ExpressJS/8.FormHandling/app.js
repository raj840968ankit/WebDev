import express from 'express'
import path from 'path'

const app = express()

const staticFilePath = path.join(import.meta.dirname, "public")

app.use('/form', express.static(staticFilePath))

app.use(express.urlencoded({extended : true})) //use middleware when getting data from post method
//using {extended : true} can handle parsing complex object structures

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`)
})

//this approach is used when form uses get method by default(not used anymore 'url length and privacy issue')
// app.get('/contact', (req, res) => {
//     console.log(req.query);
//     res.redirect('/')  //redirecting to home page after getting form data
// })

//this approach is used when form uses post method(most preferred)
app.post('/contact', (req, res) => {
    console.log(req.body);
    res.redirect('/')  //redirecting to home page after getting form data
})


const port = 3000
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})