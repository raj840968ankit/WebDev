import { db } from "../config/db-client.js";
import { usersTable } from "../drizzle/schema.js";
import { eq } from "drizzle-orm";
import bcrypt from 'bcrypt'
import argon2 from 'argon2'

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