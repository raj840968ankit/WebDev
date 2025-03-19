//.........here it is known as rest operator. It is used for taking multiple value and return array
function num(...num1){
    return num1
}
console.log(num(1,2,300));

function num2(val1, val2, ...num3){
    return num3
}
console.log(num2(100, 500, 400, 300)); // val1 = 100, val2 = 500 and rest will go to num[400 , 300]

//................functions working with objects..............
const user = {
    username : "ankit",
    price : 399
}
function objFunction(anyObject){
    return `username is ${anyObject.username} and price is ${anyObject.price}`
}
console.log(objFunction(user));

// we can directly pass object in function parameter
console.log(objFunction({
    username : "rahul",
    price : 100
}));

function returnArray(getArray){
    return getArray
}
// we can also directly pass array as an argument
console.log(returnArray([100,200,250]));



