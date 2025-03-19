/*Primitive dataTypes - 7
number
bigInt
string
null
undefined
boolean
symbol
*/

/*Non-Primitive dataTypes
array
object
function
*/

let bigint = 432536546646464n  // n is the literal of bigInt
console.log(bigint);

//symbol make the variable unique even if the values are same
const id1 = Symbol("123")
const id2 = Symbol("123")
console.log(id1 === id2);  //false

//Array
const heroes = ["ironman", "thor", "captain America"];
console.log(typeof(heroes));  //object

//object
let obj = {
    name : "ankit",
    age : 22
}
console.log(typeof(obj));     //object

//function
let func = function myFunction(){

}
console.log(typeof(func));    //object function




