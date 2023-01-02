

const sum = (x,y)=>{
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('Both arguments must be number')
    }
    return x+y;
}

try{
    const result = sum(12,'hello');
    console.log("result = ",result)
}catch(error){
    console.log(error.message)
}
console.log("after try and catch blocks code")












