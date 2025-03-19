let a = 45;
//typecasting a in string
let b = String(45);

let c = "123ab"
//typecasting here will typecast successfully but it will print NaN
let d = Number(c);

console.table([a,b,c,d]);
console.table([typeof(a),typeof(b),typeof(c),typeof(d)]); 

/*typecasting into a Number
"33" => 33
"33abc" => Nan
null => 0
undefined => Nan
false => 0
true => 1
*/

/*typeCasting into Boolean
1 => true
0 => false
"ankit" => true
"" => false
*/
let e = ""
let f = Boolean(e);
console.log(f);