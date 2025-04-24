//? Challenge: "Event Maestro: Handle It All!"

//! Objective..........
//* Create a program using Node.js EventEmitter that:
//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements...........
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.


//.....................................START................................................
//Now we are adding a json file to keep track of triggered events
const fs = require('fs')
const path = require('path')
const EventEmitter = require('events');


const emitter = new EventEmitter()
const jsonPath = path.join(__dirname, "eventTask.json")

const eventCounts = JSON.parse(fs.readFileSync(jsonPath,'utf-8'))
const updateJson = () => {
    fs.writeFileSync(jsonPath, JSON.stringify(eventCounts, null, 2), 'utf-8')    //JSON.stringify(value, replacer, space/indentation)
}

emitter.on('user-profile', (username) => {
    console.log(`${username} logged in!`);
    eventCounts['user-login']++;
    updateJson()
})

emitter.on('profile-update', (username, field) => {
    console.log(`${username} updated his ${field}`);
    eventCounts['profile-update']++;
    updateJson()
})

emitter.on('product-purchase', (username, item) => {
    console.log(`${username} purchased ${item}`);
    eventCounts['user-purchase']++
    updateJson()
})

emitter.on('user-profile', (username) => {
    console.log(`${username} logged out!`);
    eventCounts['user-logout']++
    updateJson()
})

emitter.on('summary', () => {
    console.log(eventCounts);
})


emitter.emit("user-profile", "Ankit")
emitter.emit("product-purchase", "Ankit", "Laptop")
emitter.emit("profile-update", "Ankit", "email")
emitter.emit("user-logout", "Ankit")
emitter.emit('summary')
