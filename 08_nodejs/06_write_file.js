

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'hello-fs.txt')

const contents = `\nHello filesystem and path modules`;

fs.writeFile(filePath,contents,{flag:'a+'},err=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log('file has been written successfully')
})















