const add = (a, b) => {
    return a + b
}
const sub = (a, b) => {
    return a - b
}
const PI = 3.142

//module.exports = add; //we have exported add function from this module(2.exp.js) using 'exports' keyword

// module.exports = add
// module.exports = sub 
//this won't work because 'module.exports' overrides all previous exports.property means only 'sub' will be exported

//another approach to exports multiple function...........
module.exports = {add, sub, PI} 