const os = require("os");

const gb = 1024 ** 3;

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total RAM:", (os.totalmem() / gb).toFixed(2), "GB");
console.log("Free RAM:", (os.freemem() / gb).toFixed(2), "GB");
console.log("Uptime:", (os.uptime() / 3600).toFixed(2), "hours");
