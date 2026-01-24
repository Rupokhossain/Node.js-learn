/* const addFunction = require("./mathUtils");

console.log(addFunction(10, 20)); */


const calculator = require("./mathUtils");

console.log(calculator.add(5, 5));
console.log(calculator.substract(10, 5));
console.log(calculator.PI);



// access user.js
const accessName = require("./user");
console.log(accessName.getName());
