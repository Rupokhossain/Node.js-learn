const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url; // user er location dorlam

    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});

    if(url === '/') {
        res.end("<h1>Welcome to home page.</h1>")
    }
    else if(url === '/about') {
        red.end("<h1>Welcome to about page.</h1>")
    }
    else if(url === '/contact') {
        red.end("<h1>E-Mail: test21321@gmail.com</h1>")
    }

    else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('<h1>404 - page not found!</h1>')
    }
});

server.listen(5000, () => {
    console.log("server running on http://localhost:5000");
});