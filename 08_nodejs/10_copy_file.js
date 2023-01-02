

const fs = require('fs');
const path=require('path')

const filePath1 = path.join(__dirname,'hello_fs_stream.txt')
const filePath2 = path.join(__dirname,'hello_copy_file.txt')

const rs = fs.createReadStream(filePath1);
const ws = fs.createWriteStream(filePath2)

rs.on('data',(chunk)=>{
    console.log(chunk);
    ws.write(chunk)
})
rs.on('end',()=>{
    console.log('file has been read');
    ws.end();
})
ws.on('error',err =>{
    console.log(err.message)
})
rs.on('error',err =>{
    console.log(err.message)
})









