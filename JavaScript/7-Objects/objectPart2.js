// literal object
const obj = {}
console.log(obj)

//singleton object
const myObj = new Object()
console.log(myObj)

myObj.id = 1;
myObj.name = "ankit"
myObj.email = "rajankit@gmail.com"
console.log(myObj)

//nested objects
const nestedObj = {
    email : "rajankit@gmail.com",
    nestedObj2 : {
        userFullName :{
            firstName : "ankit",
            lastName : "raj"
        }
    }
}
console.log(nestedObj.nestedObj2);
console.log(nestedObj.nestedObj2.userFullName);
console.log(nestedObj.nestedObj2.userFullName.firstName);

//merge/assign 2 or more object into one object
const obj1 = { 1 : 'a', 2 : 'b'}
const obj2 = { 3 : 'c', 4 : 'd'}
const obj3 = Object.assign({}, obj1, obj2)  //Object.assign(target,src1,src2,...)
const obj4 = {...obj1, ...obj2}  //spread operator returns a new combined object
console.log(obj3);
console.log(obj4);

//......from database we get the array of objects........
const user = [
    {
        id : 1,
        name : "ankit"
    },
    {
        id : 2,
        name : "ankita"
    }
]
console.log(user[1].name);   // to access array of objects

const user2 = {                
    name : "ankit",
    "email" : "rajankit840968@gmail.com",  
    age : 20,
    isLoggedIn : false,
}
console.log(Object.keys(user2));  // returns array of keys
console.log(Object.values(user2));  // returns array of values
console.log(Object.entries(user2)); //return array[array of entries]

console.log(user2.hasOwnProperty("isLoggedIn"));  // check whether property exists or not

