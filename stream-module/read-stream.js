const fs = require("fs");

// readable stream create 
const readStream = fs.createReadStream("./big.text-.txt", "utf8");

readStream.on("data", (chunk) => {
    console.log("Notun ak tukra data ashlo");
    console.log(chunk.length);
});

readStream.on("end", () => {
    console.log("Shob data pora shesh!");
});

readStream.on("error", (err) => {
    console.log("Error found!", err.message);
});