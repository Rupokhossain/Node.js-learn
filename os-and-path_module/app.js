// path 

const path = require("path");

// const extensionName = path.extname("index.html");
// console.log(extensionName);

console.log(path.basename("D:/node/app/index.js"));

console.log(path.basename("index.js", ".js"));

console.log(path.dirname("D:/node/app/index.js"));

const result = path.join("src", "users", "profile.js");
console.log(result);