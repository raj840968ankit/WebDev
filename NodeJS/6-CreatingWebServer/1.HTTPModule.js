//this modules creates http server that manages client request and server responses
const http = require('http')

const server = http.createServer((request, response) => {
    if(request.url === '/'){   /* '/' indicating by-default home page */
        response.setHeader('Content-Type', 'text/html')
        response.write("<h1> Ankit has created server successfully! </h1>")
        response.end()  //now the response has sent
    }

    //creating a source-code server page
    if(request.url === '/source-code'){
        response.setHeader('Content-Type', 'text/html')
        response.write('<h1>source code will be available soon</h1>')
        response.end()
    }
})  //createServer() returns EventEmitter's object

const port = 3000   // server will listen on port 3000
server.listen(port, function(){
    console.log(`Server is listening on port ${port}`);
})


//************Note :- install nodemon for automatic refresh server and create package.json***************************/
//creating package.json = go to base project folder -> use command 'npm init' (package.json created)
//installing nodemon = go to base project folder -> use command 'npm i nodemon'
//for auto refresh server - run your server file using 'nodemon filename.js'


//************Note :- Alternative way to automatic refresh server***************************/
//create package.json
//use command 'node --watch filename.js' (this is automatically refresh server)