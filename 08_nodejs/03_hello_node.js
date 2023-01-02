

const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Hello Node');
    res.end('I am loving it');
});

server.listen(3000);









