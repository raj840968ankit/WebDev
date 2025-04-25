import { log } from 'console';
import readline from 'readline';  //for reading input from CLI

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = []

const showMenu = () => {
    console.log("\n1: Add a task");
    console.log("2: View Task");
    console.log("3: Exit");
    rl.question("Choose an option : ", handleInput)
}
const handleInput = (option) => {
    if(option === '1'){
        rl.question("Enter a task : ", (task) => {
            todos.push(task)
            console.log("Task added : "+task);
            showMenu()
        })
    }else if(option === '2'){
        console.log("\nYour Tasks :-");
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        })
        showMenu()
    }else if(option === '3'){
        console.log("..........Good bye...........");
        rl.close()
    }else{
        console.log("Invalid Option, Please try Again");
        showMenu()
    }
}
showMenu()
