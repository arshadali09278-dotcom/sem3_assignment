const fs = require("fs");
console.log("1. Start");
fs.readFile("welcome.txt", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
console.log("3. End");
