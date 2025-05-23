import path from 'path'
import fs from 'fs/promises'
import crypto from "crypto"
import express from 'express'

const jsonFilePath = path.join(import.meta.dirname, "data", "links.json")

const port = 3001

const app = express()

//serving css file to the server
app.use(express.static(path.join(import.meta.dirname, "public")))

app.use(express.urlencoded({extended : true}))


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
//serving html file to the server
app.get('/', async (req, res) => {
    try {
        const file = await fs.readFile(path.join(import.meta.dirname, "views", "index.html"))
        const links = await loadLinks()

        //manipulating html file directly with express and not using js anymore (writing js directly with express)
        const content = file.toString().replaceAll("{{ shortened_url }}", 
            Object.keys(links).map((link) => {
            return `<li><a href="/${link}" target="_blank">${req.host}/${link}</a> - ${links[link]}</li>`;
            }).join("\n")
        ) 
        //after manipulating send it back to client
        return res.send(content)
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")
    }
})

//taking data from client from server
app.post('/', async (req, res) => {
    try {
        const {url, shortCode} = req.body;
        const links = await loadLinks()

        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex")

            //checking in file if shortCode exists
            if(links[finalShortCode]){
                return res.status(400).send("Short code already exists, Please choose another")
            }

            //if not exists then give value of url to finalShortCode
            links[finalShortCode] = url
            await saveLinks(links)
            return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
})

app.get('/:shortCode', async (req, res) => {
    try {
        const {shortCode} = req.params
        const links = await loadLinks()
        if(!links[shortCode]){
            return res.status(404).send("404 error occurred")
        }
        res.redirect(links[shortCode])
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})