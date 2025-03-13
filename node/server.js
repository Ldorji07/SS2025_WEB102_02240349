const http = require("http");
const server = http.createServer((req, res) => {
    console.log(`Recived request: ${req.method} ${req.url}`); 
    res.writeHead(200, { "Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Hello World!"}));
});

 const PORT = 3000;
 server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
 });

 const http = require('http');

 const students = [
    {id: 1, name: "Lhundup", age: 19},
    {id: 2, name: "Dorji", age: 20}
 ];

 const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to our API');
    }

    else if (req.method === 'GET' && req.url === '/students') {
        res.writeHead(200);
        res.end(JSON.stringify(students));
    }

    else {
        res.writeHead(404)
        res.end(JSON.stringify({error: "Route not found"}));
    }
 });

 server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
 });