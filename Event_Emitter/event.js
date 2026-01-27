/* const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// create event listner

myEmitter.on("order-pizza", (size, topping) => {
    console.log(`${size} & ${topping}`);
});

// rekti listener eki event er jonno
myEmitter.on("order-pizza", () => {
    console.log("Thanks for your order!");
});

// event gotano
console.log("Order done!");

myEmitter.emit("order-pizza", "Large", "Extra Cheese");
*/




const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// register an event listener

/* myEmitter.on("event", () => {
    console.log("An event occurred!");
});

myEmitter.emit("event")*/


// event with multiple arguments
/* myEmitter.on("status", (code, message) => {
    console.log(`Got status: ${code} ${message}`);
});

myEmitter.emit("status", 200, "OK"); */


// once-time event listeners
/* myEmitter.once("onetime", () => {
    console.log("This will be called only once");
});

// first emit - will trigger the listener
myEmitter.emit("onetime");

// second emit - won't trigger the listener
myEmitter.emit("twotime"); */


// error event handler
myEmitter.on('error', (err) => {
    console.log('Error occurred:', err.message);
});

// emit an error event
myEmitter.emit("error", new Error("Something went wrong!"));


