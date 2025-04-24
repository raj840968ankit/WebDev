//....................Asynchronous file system handling......................................
const fs = require('fs')
const path = require('path')
const filename = "async.txt"
const filePath = path.join(__dirname, filename)

//..........................................writing to a file..............................................
//*-------------------------------------------------------------------------------------*
//* fs.writeFile(): Writes data to a file, replacing the file if it already exists.
//! syntax: fs.writeFile(path, data, options, callback);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//? callback: A function with an err parameter.
//*-------------------------------------------------------------------------------------*
fs.writeFile(filePath, "This is asynchronous file handling", 'utf-8', (error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("File data is written");
    }
})


//...........................Reading from a file...............................
//*-------------------------------------------------------------------------------------*
//* fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
//! syntax: fs.readFile(path, options, callback);

//? path: File path to read from.
//? options: Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
//? callback: A function with parameters (err, data).
//*-------------------------------------------------------------------------------------*
fs.readFile(filePath, 'utf-8', (error, data) => {
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})


//..........................................Appending to a file..............................................
//*-------------------------------------------------------------------------------------*
//* fs.appendFile(): Writes data to a file, replacing the file if it already exists.
//! syntax: fs.appendFile(path, data, options, callback);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//? callback: A function with an err parameter.
//*-------------------------------------------------------------------------------------*
fs.appendFile(filePath, "\nThis is asynchronous file handling 2", 'utf-8', (error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("File data has been appended");
    }
})


// //..........................................Deleting a file..............................................
// //*-------------------------------------------------------------------------------------*
// //* fs.unlink(): Deletes a file asynchronously.
// //! syntax: fs.unlink(path, callback);

// //*-------------------------------------------------------------------------------------*
// fs.unlink(filePath, (error) => {
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File has been deleted");
//     }
// })