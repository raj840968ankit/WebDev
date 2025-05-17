import express from 'express'

//creating an instance of express
const app = express()
//"app" variable holds the created express app which i can use for :-
//   1.Define routes (aap.get(), app.post(), etc)
//   2.Configure middleware (app.use())
//   3.Start the server (app.listen())

//...............creating server......................
app.get('/', (req, res) => {  //here get method is used to send response from server
    return res.send("<h1>Hello World!!</h1>")
})

app.get('/about', (req, res) => {  //here get method is used to send response from server
    return res.send("<h1>Hello About page!!</h1>")
})

// const port = 3000
const port = process.env.PORT //when working with environment variable (.env file)
app.listen(port, () =>{
    console.log(`Server is listening at http://localhost:${port}.....`);
})

