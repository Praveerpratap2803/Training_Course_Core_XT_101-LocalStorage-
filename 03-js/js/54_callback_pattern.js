
function sum(x,y,callback){
    setTimeout(
        function foo(){
            callback(x+y,x*y);
        },
        3000
    )
}

sum(12,13,function(result,z){
    console.log(result)
    console.log(z)
})
console.log('last line of script')

















