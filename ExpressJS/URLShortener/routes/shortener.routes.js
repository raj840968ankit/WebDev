
import express from 'express'
import { postUrlShortener, getReport, getUrlShortener, getShortLink } from '../controllers/post.controller.js'    

const router = express.Router()

//using template engines(dynamic html ejs files)
router.get("/report", getReport)   //using controller



//.......................creating server..............................
//serving index.ejs file to the server
router.get('/', getUrlShortener);  //using controller.js

//taking data from client from server
router.post('/', postUrlShortener)  //using controller.js

router.get('/:shortCode', getShortLink);

//default export
// export default router

//named exported to app.js
export const shortenerRouter = router