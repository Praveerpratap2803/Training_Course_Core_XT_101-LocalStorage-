console.log( 1 );

setTimeout(
    () => {
        console.log( 2 );
    },
    0
);

console.log( 3 );

for( let i = 0; i < 1e9; i++ ) {
    ;
}
