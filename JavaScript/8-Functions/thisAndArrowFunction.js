// .............'this' function (refers to current context)...................
// 'this' function works with object only
console.log(this); //this will print an empty object{} because it is used outside the object

const user = {
    username : "ankit",
    price : 100,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`); //this will print currentObject.username
        console.log(this); //this will print the whole currentObject
    }
}
user.welcomeMessage();
user.username = "hitesh" //now the object value is changed so it will considered as different object
user.welcomeMessage()

function chai(){
    let username = "ankit"
    console.log(this.username); // this doesn't work in functions and will print undefined here
}
chai()

//functions can also be written as
let chai2 = function (){
    let username = "ankit"
    console.log(this.username); // this doesn't work in functions and will print undefined here
}
chai2()

//.............Arrow function syntax  (parameters) => { function definition }................................
let chai3 = () => {
    let username = "ankit"
    console.log(this.username);
}
chai3()

const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3, 4))

//implicit return arrow function 
const add2 = (num1, num2) => (num1 + num2) // if we use {} then we must use return keyword but if we use () then return keyword is not necessary
console.log(add2(2,3));

//implicit return object
const obj = () => ({username : "ankit"})
console.log(obj());
