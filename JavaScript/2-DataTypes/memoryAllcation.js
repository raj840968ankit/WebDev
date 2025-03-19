// Primitive(stack), Non-Primitive(heap)

//Primitive(stack)
let a = "ankit";
let b = a;          //only value copied
console.log(b);
b = "singh"
console.log(a);
console.log(b);

//Non-Primitive(heap)
let obj = {
    name : "ankit",
    email : "rajankit2004@ug.cusat.ac.in"
}
let obj2 = obj     //reference copied
obj2.email = "rajankit840968@gmail.com"
console.log(obj.email);
console.log(obj2.email);

