const fs = require("fs");

const readStream = fs.createReadStream("./big.text-.txt");
const writeStream = fs.createWriteStream("./copy-of-big-text.txt");

// pipe diye source theke destination porjonto data pathano
readStream.pipe(writeStream);

writeStream.on("finish", () => {
    console.log("File copy done!");
});
