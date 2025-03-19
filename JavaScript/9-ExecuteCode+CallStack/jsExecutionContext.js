// .............Javascript Execution Context...................
// it states that how a JS file will run or execute.
// JavaScript execution context has following types :-
//    i) Global Execution context  
//    ii) Functional Execution context
//    iii) Eval Execution context 

// How JavaScript Execution Context works :-
//    i) Global execution - it is first allocated in (this)
//    ii) Memory creation phase :- Here memory is only allocated for variables.
//        let us understand memory creation phase with and example :-
          let val1 = 10
          let val2 = 5
          function add(num1, num2){
                let total = num1 + num2
                return total
          }
          let result1 = add(val1, val2)
          let result2 = add(10, 2)
          // val1 -> undefined
          // val2 -> undefined
          // add -> definition
          // result1 -> undefined
          // result2 -> undefined
//    iii) Execution phase :- Operation Performed like addition subtraction etc.
          // val1 <- 10
          // val2 <- 5
          // when add is called then a new sandbox is created with (new variable environment + executional thread)
          //for each function call a new sandbox is created
          //for each sandbox there will again memory phase and execution phase will occur
              // e.g. Memory Phase :-
              //      num1 -> undefined
              //      num2 -> undefined
              //      total -> undefined
              //      Execution phase :-
              //      num1 <- 10
              //      num2 <- 5
              //      total <- 15
              // After the function is executed it return value to global execution context and then after that sandbox is deleted

// we cam visually see the call stack in browser (inspect -> source -> create new js file -> write some methods and call that -> ctrl + s (save) -> click on run button -> check in call stack)
