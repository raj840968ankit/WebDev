import http from "http"
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from "url"
import crypto from "crypto"


const filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filepath)
const jsonFilePath = path.join(__dirname, "data", "links.json")

const port = 3001

const serveFile = async (res, filePath, header) => {
    try {
        const data = await fs.readFile(filePath)
        res.writeHead(200, {"Content-Type" : header})
        res.end(data)
    } catch (error) {
        res.writeHead(404, {"Content-Type" : 'text/plain'})
        res.end("404 page not found")
    }
}


//reading links from links.json (if not exists then creating that with empty object)
const loadLinks = async () => {
    try {
        const data = await fs.readFile(jsonFilePath, "utf-8")
        return JSON.parse(data)
    } catch (error) {
        if(error.code === "ENOENT"){   //ENOENT = ERROR NO ENTRY
            await fs.writeFile(jsonFilePath, JSON.stringify({} , null, 2))
            return {}
        }
        throw error
    }
}

const saveLinks = async (links) => {
    await fs.writeFile(jsonFilePath, JSON.stringify(links, null,2))
}
//.......................creating server..............................
const server = http.createServer(async (req, res) => {
    //serving html, css and js file to the server
    if(req.method === 'GET'){
        if(req.url === '/'){
            return serveFile(res, path.join(__dirname,"index.html"), "text/html")  //we are returning it to server
        }
        //adding corresponding css file also
        if(req.url === '/style.css'){
            return serveFile(res, path.join(__dirname,"style.css"), "text/css")   //since html file is calling style.css also
        }
        if(req.url === '/script.js'){
            return serveFile(res, path.join(__dirname,"script.js"), "text/javascript")  //since html file is calling script.js also
        }
    }

    //..............taking the client data from the server and saving data to json file......................
    if(req.method === "POST" && req.url === "/shorten"){
        //loading json file
        const links = await loadLinks()

        //loading client's request
        let body = ""
        req.on("data", (chunk) => {
            body += chunk
        })
        req.on("end" , async (chunk) => {
            console.log(body);
            const {url, shortCode} = JSON.parse(body)
            //validate the url
            if(!url){
                res.writeHead(400, {"Content-Type" : "text/plain"})
                return res.end("URL is required")
            }

            //generate shortcode if not provided (if provided then shortCode will conquer here)
            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex")

            //checking in file if shortCode exists
            if(links[finalShortCode]){
                res.writeHead(400, {"Content-Type" : "text/plain"})
                return res.end("Short code already exists, Please choose another")
            }

            //if not exists then give value of url to finalShortCode
            links[shortCode] = url
            await saveLinks(links)

            //this data is in fetch in frontend
            res.writeHead(200, {"Content-Type" : "application/json"})
            res.end(JSON.stringify({success : true, shortCode : finalShortCode}))
        })
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})