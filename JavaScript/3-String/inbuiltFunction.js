let a = new String("ankitraj");
console.log(a.length);
console.log(a[0])
console.log(a.toUpperCase());  
console.log(a.charAt(2));
console.log(a.indexOf('n'));
console.log(a.substring(0,5));
/*slice(startIndex, EndIndex) negative value count from backward and positive value count from forward(0-based indexing) 
and it don't modify array or string
*/
console.log(a.slice(-10,-3));  

let b = "   ankit raj   "
console.log(b.trim());  //remove start and end whitespaces

console.log(b.includes("ankit"));

console.log(a.replace("ankit","papa")) 

let c = "ankit-raj-1";
console.log(c.split('-'))   //splits the string based on given character 

