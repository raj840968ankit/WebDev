import { db } from "../config/db-client.js";
import { sessionsTable, usersTable } from "../drizzle/schema.js";
import { eq } from "drizzle-orm";
import bcrypt from 'bcrypt'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_EXPIRY, MILLISECONDS_PER_SECOND, REFRESH_TOKEN_EXPIRY } from "../config/constant.js";

export const getUserByEmail = async (email) => {
    const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email))
    return user;
}
export const createUser = async ({name, email, password}) => {
    return await db.insert(usersTable).values({name, email, password}).$returningId()
}

export const hashPassword = async (password) => {
    //return await bcrypt.hash(password, 10)  //! here we have added 10 salts [using bcrypt]
    return await argon2.hash(password)        //? salt are added itself [using argon2]
}

export const comparePassword = async (password, hash) => {
    // return await bcrypt.compare(password, hash) //! (password, hashPassword) [using bcrypt]
    return await argon2.verify(hash, password)     //? (hashPassword, password) [using argon2]
}

export const generateToken = ({id, name, email}) => {
    //syntax - jwt.sign(payload, secret key, options)
    return jwt.sign({id, name, email}, process.env.JWT_SECRET, {
        expiresIn : "30d"
    })
}

export const verifyJWTToken = (token) => {
    //syntax - 
    return jwt.verify(token, process.env.JWT_SECRET)
};


export const createSession = async (userId, {ip, userAgent}) => {
    const [session] = await db.insert(sessionsTable).values({userId, ip, userAgent}).$returningId();
    return session;
}

export const createAccessToken = ({id, name, email, sessionId}) => {
    return jwt.sign({id, name, email, sessionId}, process.env.JWT_SECRET, {
        expiresIn : ACCESS_TOKEN_EXPIRY / MILLISECONDS_PER_SECOND   //imported from config/constant/js
    })
}

export const createRefreshToken = (sessionId) => {
    return jwt.sign({sessionId}, process.env.JWT_SECRET, {
        expiresIn : REFRESH_TOKEN_EXPIRY / MILLISECONDS_PER_SECOND  //expires in 1 Week
    })
}