
import express from 'express'
import * as shortened from '../controllers/post.controller.js'    

const router = express.Router()

//using template engines(dynamic html ejs files)
router.get("/report", shortened.getReport)   //using controller



//.......................creating server..............................
//serving index.ejs file to the server
router.get('/', shortened.getShortenerPage);  //using controller.js

//taking data from client from server
router.post('/', shortened.postShortener)  //using controller.js

router.get('/:shortCode', shortened.getShortLink);

//default export
// export default router

//named exported to app.js
export const shortenerRouter = router