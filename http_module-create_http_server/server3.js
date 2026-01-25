const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/api/user') {
        res.writeHead(200, {'content-type': 'application/json'});

        const userData = {
            id: 1,
            name: "Siam Ahmed",
            profession: "Node.js Learner"
        };

        // object ke string baniye pathate hoy.
        res.end(JSON.stringify(userData));
    } else {
        res.end("Visit /api/user to see data");
    }
});

server.listen(5000, () => {
    console.log("server running on http://localhost:5000");
});