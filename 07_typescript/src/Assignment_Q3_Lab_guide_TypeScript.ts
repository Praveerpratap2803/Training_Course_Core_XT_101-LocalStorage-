/*
3. Write a function contains() that accepts an array that can have any primitive value, and another
primitive value as the second argument, and returns true if the second argument appears in
the array, and false otherwise.
```
console.log( contains( [ 1, 'hello', 3, true ], 3 ) ); // prints true
console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); // prints false
```

*/

const contains = (x:(number|string|boolean)[],y:(number|string|boolean)):boolean =>{
    for(let i=0;i<x.length;i++){
        if(x[i]===y){
            return true
        }
    }
    return false;
} 

//console.log(contains([1,2,3],4))
console.log( contains( [ 1, 'hello', 3, true ], 3 ) ); // prints true
console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); // prints false

export{}


