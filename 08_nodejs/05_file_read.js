
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'03_hello_node.js');

fs.readFile(filePath,'utf-8',(err,contents)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(contents)
    //console.log(contents.toString())

})

console.log("last line of script");

















