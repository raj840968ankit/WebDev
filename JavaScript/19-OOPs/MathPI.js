const PIproperty = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(PIproperty) //it will show writable as false
console.log(Math.PI);  //3.141.........
Math.PI = 5
console.log(Math.PI);  //again show 3.141.. because it writable property is false and cannot be configured in future

//But we can configure property in custom objects
const user = {
    name: "ankit",
    location: "bihar"
}
const userProperty = Object.getOwnPropertyDescriptor(user, 'name')
console.log(userProperty);
//if i will make enumerable property of name as false then it can't be iterable
Object.defineProperty(user, 'name', {
    enumerable : false
})
for(let key of Object.keys(user)){
    console.log(`key = ${key} Value = ${user[key]}`);  //it will not iterate on name
}
