console.log( 1 );

setTimeout(
    () => { // f
        console.log( 2 );

        for( let i = 0; i < 4e9; i++ ) {
            ;
        }
    },
    0 // will get queued immediately (but executed only later)
);

console.log( 3 );

setTimeout(
    () => { // g
        console.log( 4 );
    },
    0 // will get queued immediately
);

console.log( 5 );