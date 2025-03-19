console.log("2" > 1);  // automatically converts string to a number

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
/*here equality check(==) and other comparison operator works differently
other comparison operator converts null to a number as 0 */

//undefined gives always false with comparison operator
console.log(undefined > 0);  //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//(===) and (!==) it checks value as well as type
console.log("2" === 2);  //false




