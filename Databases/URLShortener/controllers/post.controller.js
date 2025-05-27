import crypto from 'crypto'
import { saveLinks, loadLinks, getLinksByShortcode } from '../models/data.model.js';

const postUrlShortener = async (req, res) => {
    try {
        const {url, shortCode} = req.body;
        const links = await loadLinks()
        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex")
        console.log(links);
        
        // //checking in file if shortCode exists
        // if(links[finalShortCode]){
        //     return res.status(400).send("Short code already exists, Please choose another")
        // }
        links.forEach(({url, shortCode}) => {
            if(shortCode){
                return res.status(400).send("Short code already exists, Please choose another")
            }
        })

        //if not exists then give value of url to finalShortCode
        // links[finalShortCode] = url
        // await saveLinks(links)

        await saveLinks({shortCode, url}) 
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

const getUrlShortener = async (req, res) => {
  try {
    const links = await loadLinks();
    res.render('index', { links, req });  // passing req so you can use req.headers.host in ejs
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

        if(!link.shortCode){
            return res.redirect('/404')
        }
        return res.redirect(link.url)
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")
    }
}
//exporting this function to use in shortener.routes.js
export { postUrlShortener, getReport, getUrlShortener, getShortLink };