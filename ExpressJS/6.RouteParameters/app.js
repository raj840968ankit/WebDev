import express from 'express'  
import path from 'path'

const app = express()

const staticFilePath = path.join(import.meta.dirname, "public")

app.use('/tictactoe', express.static(staticFilePath))

app.get('/', (req, res) => {
    res.send(`<h1>Home page</h1>`)
})

//Example of single route parameter (e.g. http://localhost:3000/profile/ankit or (:username))
app.get('/profile/:username', (req, res) => {
    console.log(req.params);
    res.send(`<h1>Hi Username is ${req.params.username}</h1>`)
})

//Example of multi route parameter (e.g. http://localhost:3000/profile/ankit or (:username)/article/learn-express-routes or (:slug))
//slug is used to denote unique identifier
app.get('/profile/:username/article/:slug', (req, res) => {
    /*if i will give (http://localhost:3000/profile/ankit/article/learn-express-js)
    and access it by using req.params.slug then it will show 'learn-express-js' but i don't want hyphen(-) 
    then use Javascript replace function with regex globally (e.g. '/-/g')*/
    const formattedSlug = req.params.slug.replace(/-/g, ' ')
    res.send(`<h1>Article ${formattedSlug} by : ${req.params.username}</h1>`)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})