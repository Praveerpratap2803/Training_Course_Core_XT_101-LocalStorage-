// In the first pass variables are given space in memory, and functions are defined (for the earlier syntax)
// In the second pass it executes the code
 // The RHS is a "function expression" - a function is created just-in-time (when this line executes)

const sum2=function(x,y){
    const result=x+y;
    return result;
}

let a=12;
const res=sum2(a,13);

console.log(res);






