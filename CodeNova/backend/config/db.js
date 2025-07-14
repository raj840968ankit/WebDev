import  mongoose from "mongoose";
import { env } from "./env.js";


export const connect = async () => {
    try {
        await mongoose.connect(`${env.MONGODB_URI}`)
        
    } catch (error) {
        console.error("Mongo DB connect error : ", error);
    }
}





