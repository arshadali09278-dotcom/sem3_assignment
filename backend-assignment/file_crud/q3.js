const fs = require("fs");

fs.writeFileSync("tasks.txt", "Task 1: Learn Node");
fs.appendFileSync("tasks.txt", "\nTask 2: Learn fs module");

const data = fs.readFileSync("tasks.txt");
console.log(data);
