//syntax of a function -> ( function functionName(parameters without datatype) )
function myName(){
    console.log("A");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
}
//calling a function -> myName is known to be reference and braces () is known to be execution 
//together using reference() is known as function call
myName()

function add(first , second){
    console.log(`sum = ${first + second}`);
}
//functionName(arguments)
add(4, 5)
//if there is nothing returned by function then it will print undefined in storing variable
const result = add(5, 6)
console.log(result)

function add2(first , second){
    return first + second
}
const result2 = add2(5,6);
console.log(`sum = ${result2}`);

function userLoginMessage(username){
    return `${username} just logged in`
}
console.log(userLoginMessage("ankit"));
//if there will no argument is passed then by default it will print undefined
console.log(userLoginMessage())

//here this type of parameter used is called default parameter
function userLoginMessage2(username = "ankit"){
    return `${username} just logged in`
}
console.log(userLoginMessage2());  //here it will not print undefined because it will take default value
console.log(userLoginMessage2("hitesh"));  //here it will override default value

//we can manage undefined value by using if-else statement
function userLoginMessage3(username){
    if(!username){  // this can also be written as if(username === undefined)
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(userLoginMessage3());