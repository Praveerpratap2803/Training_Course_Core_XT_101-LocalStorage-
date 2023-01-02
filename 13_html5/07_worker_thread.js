const getSum = (number) =>{
    let sum = 0;
    for(let i=0;i<=number;i++){
        sum += i;
    }
    return sum;
}

onmessage = (event) =>{
    const number = event.data.number;
    const sum = getSum(number);

    postMessage({
        sum
    })
}






