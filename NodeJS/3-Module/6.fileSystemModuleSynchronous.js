//import fs module
const { log } = require('console')
const fs = require('fs')
const path = require('path')
const filename = "data.txt"
const filePath = path.join(__dirname, filename)


//..............................Writing to a file...................................................
//* fs.writeFileSync(): Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.
//! syntax: fs.writeFileSync(filePath, data, options);
//? options: Optional. Encoding ('utf8') to get data as a string.
fs.writeFileSync(filePath, "This file indicates to 6.fileSystemModule.js", 'utf-8')


//.............................Reading from a file.......................................................
//* fs.readFileSync(): Reads a file's content and returns it as a string or Buffer.
//! syntax: const data = fs.readFileSync(filePath, options);
//? options: Optional. Encoding ('utf8') to get data as a string.
const readFile = fs.readFileSync(filePath, 'utf-8')    //or fs.readFileSync(filePath)
console.log(readFile);   //or readFile.toString()


//..............................Appending to a file....................................................
//*-------------------------------------------------------------------------------------*
//* fs.appendFileSync(): Appends data to a file. If the file does not exist, it creates the file.
//! syntax: fs.appendFileSync(filePath, data, options);
//? filePath: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Encoding options ('utf8').
//*-------------------------------------------------------------------------------------*
fs.appendFileSync(filePath, "\nData Appended", 'utf-8')


//.....................................Deleting a file........................................
//*-------------------------------------------------------------------------------------*
//* Delete File (fs.unlinkSync()) : Deletes a file by its path.
//! syntax: fs.unlinkSync(filePath);
//? filePath: The path of the file to delete.
//*-------------------------------------------------------------------------------------*
//fs.unlinkSync(filePath)


//....................................Rename a file......................................
//*-------------------------------------------------------------------------------------*
//* Rename File (fs.renameSync) : Renames a file from one name to another.
//! syntax: fs.renameSync(oldPath, newPath);
//? oldPath: Current file path.
//? newPath: New file path or name.
//*-------------------------------------------------------------------------------------*
const renameFileName = "fileRenamed.txt"
const renameFilePath = path.join(__dirname, renameFileName)
fs.renameSync(filePath, renameFilePath)