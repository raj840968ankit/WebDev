//..........object = {key(string) : value}...............

//{name : "ankit" & "name" : "ankit"} both are identical/same
const sym = Symbol("key1")
const myObj = {                //this is object literal
    name : "ankit",
    "email" : "rajankit840968@gmail.com",
    [sym] : "this is symbol property",   //symbol declared in [] in objects
    age : 20,
    isLoggedIn : false,
    myArr : [1, 2, 3, 4],
    person : function(){                  //declare a function in obj
        console.log(`my name is ${this.name}`)     
    }
}
console.log(myObj); 
myObj.person(); 

//accessing object 
console.log(myObj.name);  
console.log(myObj["name"]);  //mostly preferred
console.log(typeof myObj[sym]);

//changing value in object
myObj.age = 25;
console.log(myObj);

//can't able to modify values after freezing object
//Object.freeze(myObj)
myObj.age = 30;
console.log(myObj);

//to include a function in object
myObj.greet = function(){
    console.log("hello JS users");
}
myObj.greet();




 




