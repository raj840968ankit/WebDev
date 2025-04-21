//const add = require("./2.exp") //now we have imported '2.exp.js' using 'require' keyword

//console.log(add(5, 10));

//imports multiple function at once from a module/file 
const {add, sub, PI} = require("./2.exp")

console.log(add(10, 5));
console.log(sub(10, 5));
console.log(PI);

//Another method
const math = require("./2.exp")
console.log(math.add(10, 5));
console.log(math.sub(10, 5));
console.log(math.PI);