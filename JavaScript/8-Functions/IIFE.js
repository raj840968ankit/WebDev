//........Immediately Invoked Function Expression (IIFE)................
//can be used in database connection that can be invoked immediately
// Syntax : (function definition)();
( function db(){      //named IIFE
    console.log("Database connected 1");
})();  // this function will invoked automatically after applying () execution symbol

// IIFE arrow function
( () => {            //unNamed IIFE
    console.log("Database connected 2");
})();

//with parameter IIFE
( (name) => {
    console.log(`my name is ${name}`);
})("ankit");