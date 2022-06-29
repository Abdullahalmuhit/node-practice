const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            // console.log(chunk.toString());
            // res.write('This is about us page');
        });
        req.on('end', () => {
            console.log('Stream Finished');
            const allData = Buffer.concat(body).toString();
            console.log(allData);
        });
        res.write('Thanks For Submitting Data');
        res.end();
    } else if (req.url === '/') {
        res.write('<html><head><title>Page Title</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message"></input></form></body>'
        );
        res.end();
    } else {
        res.write('page not found');
        res.end();
    }
});

server.listen(30001);
console.log('server running.....');

// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/filesystem1.txt`, 'utf-8');
// ourReadStream.on('data', (data) => {
//     console.log(data);
// });
