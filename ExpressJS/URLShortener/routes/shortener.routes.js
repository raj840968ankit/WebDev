import fs from 'fs/promises'
import crypto from "crypto"
import path from 'path'
import express from 'express'

const router = express.Router()

//using template engines(dynamic html ejs files)
router.get("/report", (req,res) => {
    const student = [{name : 'Ankit', grade : "5th", favoriteSubject : 'Science'},
        {name : 'Ishita', grade : "5th", favoriteSubject : 'History'},
        {name : 'Rohan', grade : "9th", favoriteSubject : 'Biology'},
        {name : 'Kabir', grade : "8th", favoriteSubject : 'Chemistry'},
        {name : 'Gaurav', grade : "10th", favoriteSubject : 'Physics'}
    ];
    res.render("report", { student })
})

//reading links from links.json (if not exists then creating that with empty object)
const loadLinks = async (appRoot) => {
    const jsonFilePath = path.join(appRoot, "data", "links.json")
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

const saveLinks = async (appRoot, links) => {
    const jsonFilePath = path.join(appRoot, "data", "links.json")
    await fs.writeFile(jsonFilePath, JSON.stringify(links, null,2))
}

//.......................creating server..............................
//serving index.ejs file to the server
router.get('/', async (req, res) => {
  try {
    const links = await loadLinks(req.appRoot);
    res.render('index', { links, req });  // passing req so you can use req.headers.host in ejs
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
});

//taking data from client from server
router.post('/', async (req, res) => {
    try {
        const {url, shortCode} = req.body;
        const links = await loadLinks(req.appRoot)

        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex")

            //checking in file if shortCode exists
            if(links[finalShortCode]){
                return res.status(400).send("Short code already exists, Please choose another")
            }

            //if not exists then give value of url to finalShortCode
            links[finalShortCode] = url
            await saveLinks(req.appRoot, links)
            return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
})

router.get('/:shortCode', async (req, res) => {
    try {
        const {shortCode} = req.params
        const links = await loadLinks(req.appRoot)
        if(!links[shortCode]){
            return res.status(404).send("404 error occurred")
        }
        return res.redirect(links[shortCode])
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")
    }
});

//default export
// export default router

//named export
export const shortenerRouter = router