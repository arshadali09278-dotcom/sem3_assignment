const fs = require("fs");
fs.mkdirSync("data");
fs.writeFileSync("data/notes.txt", "Note 1: Backend is fun");
fs.appendFileSync("data/notes.txt", "\nNote 2: fs module learned");
fs.appendFileSync("data/notes.txt", "\nNote 3: CRUD done");
const data = fs.readFileSync("data/notes.txt");
console.log(data);
console.log("Number of notes:", count);
