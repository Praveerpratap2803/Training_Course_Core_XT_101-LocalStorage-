// ES2015 introduced a class called Promise
// The promise is "pending" when created. Then it can either go to "resolved" state / "rejected" state.
function sum( x, y ) {
    return new Promise(function( resolve, reject ) {
        setTimeout(
            function() {
                if( typeof x !== 'number' || typeof y !== 'number' ) {
                    reject( new Error( 'At least one of the arguments was not a number' ) );
                    return;
                }

                const result = x + y;

                // Hey promise! Here is the result. The promise is resolved.
                resolve( result );
            },
            3000
        );
    });
}

async function calSerialSums(){

    console.log(2);

    try{
        const result1 = await sum(12,13);
        console.log('result1 = ',result1);

        const result2 = await sum(result1,14)
        console.log('result2 = ',result2)
        
        const result3 = await sum(result2,15)
        console.log('result3 = ',result3)
        return result3
    }catch(error){
        console.log(error.message);
}


}

console.log(1);
calSerialSums()
    .then(function(result){
        console.log('final result = ',result);
    })
console.log(4)





