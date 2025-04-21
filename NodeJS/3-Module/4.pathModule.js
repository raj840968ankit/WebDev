//Path module helps in working with the file and directory path in node js
//for using path module we have to require path variable or path module
const path = require("path")
//__filename and __dirname are two constant that shows current file and current directory
console.log(__dirname);
console.log(__filename);

//windows uses '\' for showing path and Linux and mac uses '/'
//using 'path.join()' will automatically format path in any OS
//e.g. folder\student\data.txt
const filepath = path.join('folder', 'student', 'data.txt')
console.log(filepath);


//'path.parse(filepath)' will give every info about path
console.log(path.parse(filepath));

//'path.resolve(filepath)' will give absolute path
console.log("absolute path : "+ path.resolve(filepath));


