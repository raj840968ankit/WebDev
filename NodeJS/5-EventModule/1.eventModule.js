//eventEmitter is a core module in Node js use to create and handle custom events
//eventEmitter is a part of event module

// Import EventEmitter class
const EventEmitter = require("events"); 
// Create an instance of EventEmitter
const emitter = new EventEmitter();
// 1. Define an event listener (addListener) of specified name. Here "greet"
emitter.on("greet", () => {
  console.log(`hello Ankit`);
});
// // 2. Trigger (emit) the "greet" event
emitter.emit("greet");


//* You can also pass arguments while emitting.
emitter.on("greet2", (username, prof) => {
  console.log(`hello ${username}, you are a ${prof}, ry8!`);
});
// 2. Trigger (emit) the "greet" event
emitter.emit("greet2", "Ankit", "Full Stack Dev");