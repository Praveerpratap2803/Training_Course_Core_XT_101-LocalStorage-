const contains = <T extends number|string|boolean>(x:T[],y:number|string|boolean):boolean =>{
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







