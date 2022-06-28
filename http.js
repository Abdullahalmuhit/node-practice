const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello how are you?');
    res.end();
});

server.listen(30001);
console.log('server running');
