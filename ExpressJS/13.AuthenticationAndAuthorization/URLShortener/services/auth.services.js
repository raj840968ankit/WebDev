import { db } from "../config/db-client.js";
import { sessionsTable, shortenerTable, usersTable, verifyEmailTokensTable } from "../drizzle/schema.js";
import { eq, sql } from "drizzle-orm";
import bcrypt from 'bcrypt'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_EXPIRY, MILLISECONDS_PER_SECOND, REFRESH_TOKEN_EXPIRY } from "../config/constant.js";
import crypto from 'crypto'

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

export const createAccessToken = ({id, name, email, isEmailValid, sessionId}) => {
    return jwt.sign({id, name, email, isEmailValid, sessionId}, process.env.JWT_SECRET, {
        expiresIn : ACCESS_TOKEN_EXPIRY / MILLISECONDS_PER_SECOND   //imported from config/constant/js
    })
}

export const createRefreshToken = (sessionId) => {
    return jwt.sign({sessionId}, process.env.JWT_SECRET, {
        expiresIn : REFRESH_TOKEN_EXPIRY / MILLISECONDS_PER_SECOND  //expires in 1 Week
    })
}

export const findSessionById = async (sessionId) => {
    const [session] = await db.select().from(sessionsTable).where(eq(sessionsTable.id, sessionId))

    return session;
}

export const findUserById = async (userId) => {
    const [user] = await db.select().from(usersTable).where(eq(usersTable.id, userId))

    return user;
}

export const refreshTokens = async (refreshToken) => {
    try {
        const decodedToken = verifyJWTToken(refreshToken);
        //now we know refreshToken has only sessionId, so with the help of it we will regenerate access_token
        //first we will get session entry that contains user id from session table and user table

        const currentSession = await findSessionById(decodedToken.sessionId)

        if(!currentSession || !currentSession.valid){
            throw new Error("Invalid session")
        }

        const user = await findUserById(currentSession.userId)
        if(!user){
            throw new Error('Invalid user')
        }

        //if we get the user then we will again generate access token and refresh token
        const userInfo = {
            id : user.id,
            name : user.name,
            email : user.email,
            isEmailValid : user.isEmailValid,
            sessionId : currentSession.id
        }

        const newAccessToken = createAccessToken(userInfo)
        const newRefreshToken = createRefreshToken(currentSession.id)

        return {newAccessToken, newRefreshToken, user : userInfo}
    } catch (error) {
        console.error('Refreshing Token Error : ',error)
    }
}

export const clearUserSession = async (sessionId) => {
    return await db.delete(sessionsTable).where(eq(sessionsTable.id, sessionId));
}

export const getAllShortLinks = async (userId) => {
    return await db.select().from(shortenerTable).where(eq(shortenerTable.userId, userId));
}


export const generateRandomToken = async (digit = 8) => {
    const min = 10 ** (digit - 1)  //10000000
    const max = 10 ** (digit)  //100000000
    return crypto.randomInt(min, max).toString();
}


export const insertVerifyEmailToken = async ({userId, token}) => {
    //?it will check each row and delete the tokens of every user whose token expires matching with current timestamp
    await db.delete(verifyEmailTokensTable).where(lt(verifyEmailTokensTable.expiresAt, sql`CURRENT_TIMESTAMP`))

    await db.insert(verifyEmailTokensTable).values({userId, token})
}

//add 'FRONTEND_URL' to .env file first
export const createVerifyEmailLink = async(email , token) => {
    const uriEncodedEmail = encodeURIComponent(email) //this will convert ankit@gmail.com to 'ankit%40gmail.com' that browser url uses
    
    //? '/verify-email-token' this i have given in form action after clicking verify code, the get method will append the value to it as a query parameter
    return `${process.env.FRONTEND_URL}/verify-email-token?token=${token}&email=${uriEncodedEmail}`
}