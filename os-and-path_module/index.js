const os = require("os");

// pc architechture
console.log("Architecture:", os.arch());

// platform
console.log("Platform:", os.platform());

// total ram
const totalRam = os.totalmem()
console.log("Total RAM:", totalRam.toFixed(2), "GB");

// user info
console.log("User Info:", os.userInfo().username);

// uptime
console.log("Uptime:", os.uptime() / 3600, "hours");