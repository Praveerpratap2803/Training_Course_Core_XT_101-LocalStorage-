/*4. Write function ```max``` that can accept any number of arguments (assume all numbers)
and returns the maximum of the numbers. Make use of the rest operator to group the
arguments into an array before finding and returning the maximum.

max( 25, 65, 35, 45 ); // 65
max( 25, 65, 35, 75, 45 ); // 75
*/




const max=(...args)=>{
    result = Number.NEGATIVE_INFINITY;
    for(let i=0;i<args.length;i++){
        if(args[i]>result){
            result=args[i];
        }
    }
    return result;
}

console.log(max(25,65,35,45))










