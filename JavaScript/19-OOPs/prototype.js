//javascript shows prototypal behavior
//(functions, strings and array) all are prototype of object
function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);  // it will print empty object({}) because there is no object in array


//creating a constructor function and associating prototype function with it.................
//Remember - prototype can be only used with constructor function or Object,Array and String class
function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.printMe = function(){   //this will add a property 'printMe' to the createUser's Object
    console.log(`my name is ${this.username} and score is ${this.score}`);
}
const ankit = new createUser("ankit", 100)
const rahul = new createUser("rahul", 200)
ankit.printMe()


const heroes = ['thor', 'spiderman']
const power = {
    thor : 'thunder god',
    spiderman : 'web',
    getSpidermanPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.ankit = function(){ //this will add a property to Object class
    console.log('Ankit is present in all object')
}
power.ankit()

//adding a true length method to find trueLength of string
String.prototype.trueLength = function(){
    return `${this.trim().length}`
}
const name = '    ankit    '
console.log(name.trueLength())