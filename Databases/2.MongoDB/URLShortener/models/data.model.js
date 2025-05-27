// import path from 'path'
// import fs from 'fs/promises'

// //reading links from links.json (if not exists then creating that with empty object)
// const loadLinks = async (appRoot) => {
//     const jsonFilePath = path.join(appRoot, "data", "links.json")
//     try {
//         const data = await fs.readFile(jsonFilePath, "utf-8")
//         return JSON.parse(data)
//     } catch (error) {
//         if(error.code === "ENOENT"){   //ENOENT = ERROR NO ENTRY
//             await fs.writeFile(jsonFilePath, JSON.stringify({} , null, 2))
//             return {}
//         }
//         throw error
//     }
// }

// const saveLinks = async (appRoot, links) => {
//     const jsonFilePath = path.join(appRoot, "data", "links.json")
//     await fs.writeFile(jsonFilePath, JSON.stringify(links, null,2))
// }

// export {saveLinks, loadLinks}

//...........................after express........................

import { env } from "../config/env.js";
import { dbClient } from "../config/db-client.js";

const db = dbClient.db(env.MONGODB_DATABASE_NAME)

const shortenerCollection = db.collection("shorteners")

export const loadLinks = async () => {
    return await shortenerCollection.find().toArray()
}

export const saveLinks = (link) => {
    return shortenerCollection.insertOne(link)
}

export const getLinksByShortcode = async (shortCode) => {
    return await shortenerCollection.findOne({shortCode : shortCode});
}