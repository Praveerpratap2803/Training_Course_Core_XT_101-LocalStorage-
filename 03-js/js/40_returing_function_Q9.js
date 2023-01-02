function exponentFactory(x){
    function square(x){
        return x*x
    }
    function cube(x){
        return x*x*x;
    }
    function itself(x){
        return x;
    }
    if(x===1){
    return square
    }
    else if(x===2){
    return cube
    }
    else{
    return itself
    }
}
let fn;
fn = exponentFactory(2);

console.log(fn(5));
