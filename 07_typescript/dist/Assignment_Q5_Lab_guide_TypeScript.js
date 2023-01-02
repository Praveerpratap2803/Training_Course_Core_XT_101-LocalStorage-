"use strict";
/*
5. Write a function filter() that accepts an array and another function f (which returns a boolean
value). The filter function should work like so.
```
function isOdd( x ) {
 return x % 2 === 1;
}
let filteredList = filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd ); // [ 1, 3, 5, 7 ]
```
*/
Object.defineProperty(exports, "__esModule", { value: true });
var isOdd = function (x) {
    return x % 2 === 1;
};
var filter = function (x, isOdd) {
    x = x.filter(function (item) {
        if (isOdd(item) === true) {
            return item;
        }
    });
    return x;
};
var filteredList = filter([1, 2, 3, 4, 5, 6, 7, 8], isOdd);
console.log(filteredList);
/*
type isOdd = (x:number):boolean=>{
    if(x%2===1){
        return true
    }else{
        return false
    }
}

let filter = (x:number[],y:isOdd):number[]=>{
    if(isOdd()){

    }

}






let filteredList = filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd );

console.log(filteredList)

*/
