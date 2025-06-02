import crypto from 'crypto'
import { saveLinks, loadLinks, getLinksByShortcode } from '../models/data.model.js';

const postShortener = async (req, res) => {
    try {
        const {url, shortCode} = req.body;
        const links = await loadLinks()
        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex")
        //console.log(links);
        
        //checking in file if shortCode exists
        // if(links[finalShortCode]){
        //     return res.status(400).send("Short code already exists, Please choose another")
        // }

        // Check if shortCode already exists
        for (const link of links) {
            if (link.shortCode === finalShortCode) {
                return res.status(400).send("Short code already exists, Please choose another");
            }
        }

        //if not exists then give value of url to finalShortCode
        // links[finalShortCode] = url
        // await saveLinks(links)

        await saveLinks({finalShortCode, url}) 
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

const getReport = (req,res) => {
    const student = [{name : 'Ankit', grade : "5th", favoriteSubject : 'Science'},
        {name : 'Ishita', grade : "5th", favoriteSubject : 'History'},
        {name : 'Rohan', grade : "9th", favoriteSubject : 'Biology'},
        {name : 'Kabir', grade : "8th", favoriteSubject : 'Chemistry'},
        {name : 'Gaurav', grade : "10th", favoriteSubject : 'Physics'}
    ];
    res.render("report", { student })
}

const getShortenerPage = async (req, res) => {
  try {
    const links = await loadLinks();

    //!getting cookie detail
    let isLoggedIn = req.headers.cookie;
    isLoggedIn = Boolean(isLoggedIn?.split('=')[1])   //extracting 'isLoggedIn=true' value to 'true' only
    console.log("Logged in value -> ",isLoggedIn);
    

    res.render('index', { links, req, isLoggedIn });  // passing req so you can use req.headers.host in ejs
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

const getShortLink = async (req, res) => {
    try {
        const {shortCode} = req.params
        // const links = await loadLinks()
        //checking in database existence of url
        const link = await getLinksByShortcode(shortCode)
        console.log(link);
    
        // if(!links[shortCode]){
        //     return res.status(404).send("404 error occurred")
        // }

        if(!link || !link.shortCode){
            return res.redirect('/404')
        }
        return res.redirect(link.url)
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")
    }
}
//exporting this function to use in shortener.routes.js
export { postShortener, getReport, getShortenerPage, getShortLink };