//set "type" : "module" in package.json(run "npm init" if not exist) to use Ecmascript module
// export const add = (a, b) => {    //using export keyword directly with function
//     return a + b
// }
const add = (a, b) => { 
    return a + b
}
const sub = (a, b) => {
    return a - b
}
const PI = 3.142

// export default add; //we can give any name while importing by using default

export default {add, sub, PI}