const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/products", (req, res) => {
    res.send("Our Products");
});

app.get("/login", (req, res) => {
    res.send("Login Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
