

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,'03_hello_node.js')

const rs = fs.createReadStream(filePath,{encoding:'utf-8'});

rs.on('data',(chunk)=>{
    console.log(chunk);
})

rs.on('end',()=>{
    console.log('file has been read');
})

rs.on( 'error', err => {
    console.log( err.message );
});







