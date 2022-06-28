const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/about-us') {
        res.write('This is about us page');
        res.end();
    } else if (req.url === '/') {
        res.write('Hello how are you?');
        res.end();
    } else {
        res.write('page not found');
        res.end();
    }
});

server.listen(30001);
console.log('server running.....');
