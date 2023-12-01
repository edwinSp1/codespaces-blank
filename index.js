const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(fs.readFileSync('./index.html'));
});

server.listen(8080);