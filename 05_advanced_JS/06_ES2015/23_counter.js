
function *getCounter(){
    let i=1;
    while(true){
        yield i;
        i++;
    }
}

const eidCounter = getCounter();
const midCounter = getCounter();
console.log(eidCounter.next())
console.log(eidCounter.next().value)
console.log(eidCounter.next().value)
console.log(eidCounter.next().value)
console.log(eidCounter.next().value)


console.log(midCounter.next())
console.log(midCounter.next())
console.log(midCounter.next())




