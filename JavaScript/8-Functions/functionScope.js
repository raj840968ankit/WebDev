// {} is known as scope in js but in object it is known as object definition
if(true ){
    let a = 5
    const b = 10
    var c = 15
}
//console.log(a);  //give error because let obey scope rule
//console.log(b);  //give error because const obey scope rule
console.log(c);  //works because var does't obey scope rule

// Note :- if same name variable is declared as var first and then declared as let after var then it won't print anything

//........................Nested function scope...................
function outer(){
    let name = "ankit"
    function inner(){
        let age = 20;
        console.log(name)  //it will work because inner function can access outer members
    }
    //console.log(age);   //it will not work because outer function can't access inner member
    inner();
}
// inner(); it won't work outside because it is defined in outer() function
outer();

// ***********************interesting********************
console.log(add1(1)) // it will work -> calling a function before declaration
function add1(val1){
    return val1 + 1
}

// **** let num = add2(6) // it won't work assigning a function value before declaration and known as ( hoisting )
function add2(val){
    return val + 2
}