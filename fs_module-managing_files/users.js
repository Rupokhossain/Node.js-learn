const fs = require("fs/promises");

async function run() {
    const data = await fs.readFile("users.json", "utf-8");

    const user = JSON.parse(data);

    console.log(user.name);
    console.log(user.age);
}
run();