
function sum(x,y,transform){
    return transform(x)+transform(y)
}
function square(x){
    return x * x;
}
function cube(x){
    return x * x * x;
}

console.log(sum(2,3,square));
console.log(sum(2,3,cube));

function sumArray(arr,transform){
    let sum =0;
    for(let i=0;i<arr.length ;i++){
        sum += transform(arr[i]);
    }
    return sum;
}

console.log(sumArray([1,2,3,4],square));


























