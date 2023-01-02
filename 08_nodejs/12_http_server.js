

const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    res.write('Hello Node');
    res.end('I am loving it')
})

server.on('listening',()=>{
    console.log('server has started')
})

server.on('error',error=>{
    console.log(error.message);
})
server.listen(3000)


















