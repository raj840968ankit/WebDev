import { verifyJWTToken } from "../services/auth.services.js";

export const verifyAuthentication = (req, res, next) => { 
    //console.log(req.cookies);
    // ↓↓↓ use brackets, not dot with a hyphen ↓↓↓
    const token = req.cookies["access-token"];

    if(!token){
        //console.log("[verifyAuthentication] → No token found, setting req.user = null");
        req.user = null;   //defining user property null if token is not found
        return next();
    }
    //otherwise
    try {
        const decodedToken = verifyJWTToken(token);
        req.user = decodedToken;
        //console.log('req.user : ',req.user);
    } catch (error) {
        req.user = null
        console.error('JWT verification error -> ',error);
    }
    return next()
}