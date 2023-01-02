
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname,'hello_fs_stream.txt')

const ws = fs.createWriteStream(filePath);
ws.on('error',err =>{
    console.log(err.message)
})


for(let i=0;i<1e6;i++){
    ws.write(`${i+1}.Hello fs writable stram\n`)
}

ws.end();

















