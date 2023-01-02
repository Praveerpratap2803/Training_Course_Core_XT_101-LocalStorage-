


const fs = require('fs');
const path=require('path')

const filePath = path.join(__dirname,'hello-fs.txt')

try{
    const contents = fs.readFileSync(filePath,'utf-8')
    console.log(contents);
}catch(error){
    console.log(error.message);
}

console.log('end of script')












