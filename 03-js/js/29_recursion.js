

function nth_fibonacci_number(n){
    
    if(n === 1){
        return 0;
    }
    if(n===2){
        return 1;
    }  
    return nth_fibonacci_number(n-1)+nth_fibonacci_number(n-2);

}

console.log(nth_fibonacci_number(10));






