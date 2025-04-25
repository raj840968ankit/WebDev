import * as fs from "fs"
import readline from "readline"
import * as path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)  //give the current file path (here - D:\WebDev\NodeJS\10-NodeJSMiniProject\fileCreationApp\app.js)
const __dirname = path.dirname(__filename)  //extract the directory of current file (D:\WebDev\NodeJS\10-NodeJSMiniProject\fileCreationApp)

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
}) 

const fileCreation = () => {
    rl.question("Enter the filename : ", (name) => {
        const fileName = name
        const filePath = path.join(__dirname, fileName)
        rl.question("Enter the content for the file : ", (content) => {
            fs.promises.writeFile(filePath, content, 'utf-8').then(() => {
                console.log(`File "${fileName}" created successfully!`);
                rl.close()
            }).catch((error) => {
                console.log(error);
                rl.close()
            })
        })
        
    })
}
fileCreation()


