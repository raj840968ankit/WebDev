const fs = require("fs/promises")
const path = require("path")

const fileName = "fsAsyncAwait.txt"
const filePath = path.join(__dirname, fileName)

//...........................Reading files from a directory....................................
async function readFiles() {
    try {
        const files = await fs.readdir(__dirname)
        console.log(files);
    } catch (error) {
        console.log(error)
    }
}
readFiles()


//............................Writing to a file.................................
async function writeFile(){
    try {
        await fs.writeFile(filePath, "writing file using async await", 'utf-8')
        console.log("File data has been written");
    } catch (error) {
        console.log(error)
    }
}
writeFile()


//............................Reading from a file.................................
async function readFile(){
    try {
        const fileRead = await fs.readFile(filePath, 'utf-8')
        console.log(fileRead);
    } catch (error) {
        console.log(error)
    }
}
readFile()


//............................Appending to a file.................................
async function appendFile(){
    try {
        await fs.appendFile(filePath, "\nappending file using async await", 'utf-8')
        console.log("File data has been appended");
    } catch (error) {
        console.log(error)
    }
}
appendFile()


// //...........................Deleting a file..................................
// async function deleteFile(){
//     try {
//         await fs.unlink(filePath)
//         console.log("File has been deleted");
//     } catch (error) {
//         console.log(error)
//     }
// }
// deleteFile()
