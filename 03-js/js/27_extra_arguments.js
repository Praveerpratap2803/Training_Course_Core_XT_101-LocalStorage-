function foo(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        //arguments -> {'0':12,'1':13 , '2':14 ,length:3}
        console.log(arguments[i]);
        sum += arguments[i];
    }

    return sum;
    
}

console.log(foo(12,13,14));
console.log(foo(12,13,14,15));


