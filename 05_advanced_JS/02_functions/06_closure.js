function outer( o1 ) {
    let o2 = 2 * o1;

    function inner( i1 ) { // lexical scoping
        let i2 = 4 * o1;

        console.log( o1, o2, i1, i2 );
    }

    return inner;
}

// The local variables may not be destroyed when a function returns. The lifetime of local variables of a function can extend beyond the execution of the function
const inn1 = outer( 1 );
inn1( 3 ); // because of the extension in the lifetime of o1, o2, inn() is able to use them
inn1( 4 );

// A fresh o1, o2, inner are created. The new inner accesses the new o1 and o2 variables.
const inn2 = outer( 100 );
inn2( 300 );
inn2( 10 );
