let a = 55.55555;
console.log(a);
let b = new Number(55.55555); //explicitly  defines Number
console.log(b.toString());    //converts to string
console.log(b.toFixed(2));     //shows limited decimal value

let c = 46555678531;
console.log(c.toLocaleString('en-IN'));   //return indian representation of number(string)


