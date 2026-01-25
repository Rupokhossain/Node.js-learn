const http = require("http");
const port = 3000;
const hostname = "127.0.0.1"

/*const myServer = http.createServer((req, res) => {
    res.end("Hello. I am your first server");
});

myServer.listen(port, hostname, () => {
    console.log(`server is running successfully at http://${hostname}:${port}`);
});*/


const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});

    res.write('<h1 style="color: blue">Welcome to my server</h1>');

    res.write('<p>This is coming from Node.js!</p>')

    res.end('<footer>End of page</footer>')

});

server.listen(4000, () => {
    console.log("Check http://localhost:4000");
});