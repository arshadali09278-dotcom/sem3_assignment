const fs = require("fs");

fs.writeFileSync("demo.txt", "hiii");
console.log(fs.readFileSync("demo.txt"));

fs.writeFileSync("demo.txt", "hello");
console.log(fs.readFileSync("demo.txt"));

fs.appendFileSync("demo.txt", "arigato");
console.log(fs.readFileSync("demo.txt"));
