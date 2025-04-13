//promise is something that will happen in future
//promises can be of three types :- pending,fulfilled, rejected
//promises are objects
//.........creation of promises..............
//syntax:- const promiseObj = new Promise(call back function).........
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve() //it made a connection between function parameter 'resolve' and '.then' when promise consumed
    }, 1000)
})
//'.then' is used when promise consumed
//syntax:- obj.then(call back)
promiseOne.then(function(){
    console.log('promise consumed');
})

//.....another way of doing the same thing above...............
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve() 
    }, 1000)
}).then(function(){
    console.log('promise 2 consumed');
})

//......Passing data when promise is resolved
new Promise(function(resolve, reject){
    setTimeout(function(){
        //resolve method can have parameters as data or message
        //since we get data in terms of object we are passing object here to .then
        resolve({name : "Ankit", email : "rajankit@gmail.com"}) 
    }, 1000)
}).then(function(user){
    console.log(user);
})


const promiseFour =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : 'panda', password: '123'})
        }
        else{
            reject("Something went wrong")
        }
    }, 1000)
})
promiseFour.then((user) => {
    return user.username         //if we are returning from .then, we have to catch in another .then.......(Chaining)
}).then((username) => {
    console.log(username);
}).catch((error) => {     //when reject() is called then catch() will take the message
    console.log(error);
}).finally(() => console.log("promise is either resolved or rejected"))


//async await for getting promise's response
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : 'panda', password: '123'})
        }
        else{
            reject("Something went wrong")
        }
    }, 1000)
})
async function consumePromise() {
    try{                                        //if resolve
        const data = await promiseFive
        console.log(data);
    }catch(error){                              //if rejected
        console.log(error)
    }
}
consumePromise()

// //for getting api data
// async function apiData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()    //it take time to convert to json, therefore using await 
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// apiData()


//fetch returns a promise object
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
})

//if any request reaches upto network and gives error like 404 then it will be considered as fulfilled