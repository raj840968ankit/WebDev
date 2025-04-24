const fs = require("fs")
const path = require("path")

const fileName = "fsPromises.txt"
const filePath = path.join(__dirname, fileName)

//...........................to read present files in a directory...............................
const dirPath = __dirname
fs.promises.readdir(dirPath)
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })


//.............................Writing to a file...........................................
//*-------------------------------------------------------------------------------------*
//! syntax: fs.promises.writeFile(path, data, options).then().catch();
//? path: Path to the file.
//? data: Content to write.
//? options: Encoding ('utf8'), flags, etc. (optional).
//*-------------------------------------------------------------------------------------*
fs.promises.writeFile(filePath, "This file is using file promises", "utf-8")
    .then(() => console.log("file data has been written"))
    .catch((error) => console.log(error))


//...........................Reading from a file..............................
//*-------------------------------------------------------------------------------------*
//* Read (Read a File): readFile()
//* The readFile() method reads data from a file.
//* It can return the data as a Buffer or string based on the encoding provided.

//! syntax: fs.promises.readFile(path, options).then(data => ...).catch(err => ...);
//? path: Path to the file.
//? options: Encoding ('utf8') or no encoding for binary data.
//*-------------------------------------------------------------------------------------*
fs.promises.readFile(filePath, "utf-8")
    .then((data) => console.log(data))
    .catch((error) => console.log(error))


//.........................Appending to a file...................................
//*-------------------------------------------------------------------------------------*
//* Update (Append Content to a File): appendFile()
//* Adds content to the end of a file.
//* The appendFile() method adds content without overwriting the existing data.

//! syntax: fs.promises.appendFile(path, data, options).then().catch();
//? path: Path to the file.
//? data: Content to append.
//? options: Encoding ('utf8') or no encoding for binary data.
//*-------------------------------------------------------------------------------------* 
fs.promises.appendFile(filePath, "\nAppending data using file promises", "utf-8")
    .then(() => console.log("file data has been appended "))
    .catch((error) => console.log(error))


//.........................Deleting a file.......................................
//*-------------------------------------------------------------------------------------*
//* Delete (Remove a File): unlink()
//* Deletes a file from the filesystem.
//* The unlink() method removes the specified file asynchronously.

//! syntax: fs.promises.unlink(path).then().catch();
//? path: Path to the file.
//*-------------------------------------------------------------------------------------*
// fs.promises
//   .unlink(filePath)
//   .then(console.log("File Deleted successfully!"))
//   .catch((err) => console.error("Error deleting file:", err));


//*****************NOTE :- instead of (fs.promises.function), use 'require('fs/promises')' to use (fs.function) using promises */