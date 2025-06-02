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
    return res.render("report", { student })
}

const getShortenerPage = async (req, res) => {
  try {
    const links = await loadLinks();

    //!getting cookie detail (complex)
    // let isLoggedIn = req.headers.cookie;
    // isLoggedIn = Boolean(isLoggedIn?.split('=')[1])   //extracting 'isLoggedIn=true' value to 'true' only
    // console.log("Logged in value -> ",isLoggedIn);

    //!getting cookie detail via cookieParser
    // let isLoggedIn = req.cookies.isLoggedIn
    //console.log(isLoggedIn);
    // return res.render('index', { links, req, isLoggedIn });  // passing req so you can use req.headers.host in ejs

    //! we are trying to send user details after verifying JWT token and using middleware in app.js
    return res.render('index', { links, req });
  } catch (error) {
    console.error("Error in getShortenerPage:", error);
    return res.status(500).send("Internal server error");
  }
}

const getShortLink = async (req, res) => {
    try {
        const { shortCode } = req.params;
        const link = await getLinksByShortcode(shortCode);

        if (!link) {
        // don't log anything here if you don’t want tons of "undefined"
        return res.status(404).send('Not found');
        }

        console.log('Found link:', link);
        return res.redirect(link.url);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server error")
    }
}
//exporting this function to use in shortener.routes.js
export { postShortener, getReport, getShortenerPage, getShortLink };