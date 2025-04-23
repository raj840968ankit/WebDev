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