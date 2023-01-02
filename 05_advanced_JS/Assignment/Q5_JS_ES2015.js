/*5. Use the spread operator, along with the max function, to find the maximum of values in this
array.
```
const numbers = [ 25, 65, 35, 75, 45 ];
```
*/


const maxx = (...args)=>{
    const m=Math.max(...args)
    return m;
}


console.log( maxx( 25, 65, 35, 75, 45));





