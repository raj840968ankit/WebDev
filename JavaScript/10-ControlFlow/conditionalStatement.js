//.............if, else if, else statements.............
const temperature = 25
if(temperature > 25){
    console.log("it is hot");
}
else if(temperature === 25){
    console.log("it is moderate");
}
else{
    console.log("it is cold");
}

const userLoggedInFromGmail = false
const userLoggedInFromEmail = true
if(userLoggedInFromEmail || userLoggedInFromGmail){
    console.log("User Logged In Successfully");
}

//..............Switch statements.............
const num = 2;
switch (num) {
    case 1:
        console.log("corresponding string value is 1");
        break;
    case 2:
        console.log("corresponding string value is 2");
        break;
    default:
        console.log("none of 1 or 2");
        break;
}

//false values (false, 0, -0, 0n(BigInt), "", null, undefined, NaN)
//true values (true, " ","false", "0", [], {}, function(){})
//string contains anything is a true value and empty array, empty object and function declaration are true values
 
//how to check an array is empty or not
const arr = []
if(arr.length === 0){
    console.log("array is empty");
}

//how to check an object is empty or not
const obj = {}
if((Object.keys(obj)).length === 0){ //Object.keys(obj) returns an array and length property will give 0 if object has no keys
    console.log("object is empty"); 
}

//..........Ternary Operator........................
const name = "rahul"
name === "ankit" ? console.log("this is ankit") : console.log("other person")

//....................Nullish Coalescing operator (??): null undefined..............
//it is mostly used in database concept to handle null or undefined value because they can disrupt the program
let val1
//val1 = 5 ?? 10  //5 will be assigned to val1 because it is first valid value from left to right association
//val1 = null ?? 10  //10 will be assigned to val1 because it is first valid value from left to right association
//val1 = undefined ?? 10  //10 will be assigned to val1 because it is first valid value from left to right association
val1 = null ?? 5 ?? 10  //5 will be assigned to val1 because it is first valid value from left to right association
console.log(val1);
