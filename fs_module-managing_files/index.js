/* const fs = require("fs");

fs.writeFile("demo1.txt", "This is sample text", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("successful");
    }
}) */



// Synchronous

const fs = require('fs');

/* fs.writeFileSync("demo.txt", "Hello, Node.js FS Module!");
console.log("File Created Successfully"); */

/* const data = fs.readFileSync("demo.txt", "utf8");

console.log(data); */


// const data = fs.appendFileSync("demo.txt", "\nLearing by donig");

// console.log(data);


// rename & delete
fs.renameSync("demo.txt", "my-new-fil.txt");
console.log("File Renamed!");