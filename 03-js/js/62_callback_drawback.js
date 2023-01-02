function sum(x,y,callback){
    setTimeout(
        function foo(){
            callback(x+y);
        },
        3000
    )
}

sum(12,13,function(result){
    console.log(result)
    sum(14,result,function(res){
        console.log(res)
    })
})
console.log('last line of script')



