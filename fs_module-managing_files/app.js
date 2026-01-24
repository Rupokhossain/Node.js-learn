// const fs = require("fs");

// fs.readFile('newDemo.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// console.log("asynce non-blocking");


const fs = require("fs/promises");

/* async function run() {
    console.log("1. Program start");

    const data = await fs.writeFile("text.txt", "Hello Node.js");

    console.log("2. File write done");

    const readData = await fs.readFile("text.txt", "utf-8");

    console.log("3. File content: ", readData);

    console.log("4. Program end");
}
run(); */


// error handle practice
async function run() {
    try {
        const data = await fs.readFile("notfound.txt", "utf-8");
        console.log(data);
    } catch(error) {
        console.log("Error found");
        console.log(error.message);
    }
}
run();