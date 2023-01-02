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

// The promise object has 2 methods - then(), catch()
// When we call then - Hey promise! Whenever you resolve please call f, and pass it the result. If rejected, please call g and pass the error.
sum( 12, 13 )
    .then(
        function( result1 ) { // f
            console.log( 'result1 = ', result1 );
            return result1 + 1;
        }
    )
    .then(
        function( result2 ) {
            console.log( 'result2 = ', result2 );
            return result2 + 1;
        }
    )
    .then(
        function( result3 ) {
            console.log( 'result3 = ', result3 );
        }
    )
    .catch(
        function( error ) { // g
            console.log( error.message );
        }
    );