import path from 'path'
import fs from 'fs/promises'

//reading links from links.json (if not exists then creating that with empty object)
const loadLinks = async (appRoot) => {
    const jsonFilePath = path.join(appRoot, "data", "links.json")
    try {
        const data = await fs.readFile(jsonFilePath, "utf-8")
        return JSON.parse(data)
    } catch (error) {
        if(error.code === "ENOENT"){   //ENOENT = ERROR NO ENTRY
            await fs.writeFile(jsonFilePath, JSON.stringify({} , null, 2))
            return {}
        }
        throw error
    }
}

const saveLinks = async (appRoot, links) => {
    const jsonFilePath = path.join(appRoot, "data", "links.json")
    await fs.writeFile(jsonFilePath, JSON.stringify(links, null,2))
}

export {saveLinks, loadLinks}