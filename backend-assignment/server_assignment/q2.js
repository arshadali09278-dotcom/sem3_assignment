const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);
    res.end("Welcome to my server");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
