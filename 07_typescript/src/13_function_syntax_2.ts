

type BinaryFunction = (x:number,y:number) => number;

const sum1 : BinaryFunction = (x,y)=>x+y;

const sum2 : BinaryFunction = function(x,y){
    return x+y;
}

console.log(sum1(12,13))
console.log(sum2(12,14))


type transformFunction = (x:number)=>number;
 const sum = ( transform:transformFunction , ...args:number[] ):number => {
     console.log( 'args = ', args );
 
     let result = 0;
 
     for( let i = 0; i < args.length; i++ ) {
         result += transform( args[i] );
     }
 
     return result;
 };
 
 console.log( sum( x => x * x, 10, 20, 30 ) );
 console.log( sum( Math.sqrt, 1, 4, 9, 16 ) );







export{}









