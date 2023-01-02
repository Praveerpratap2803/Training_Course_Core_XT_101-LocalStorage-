// t = 0
    // prints 1 3 5
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue - does not find anything
// ...
// t = 1 - timer fires
    // g will get into the queue
// Check the queue - it finds function g, and executes function g.
    // prints 4
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// .. 
// t = 2 - timer fires
    // f will get into the queue
// Check the queue - it finds f, and executes function f
    // prints 2
console.log( 1 );

setTimeout(
    () => { // f
        console.log( 2 );
    },
    2000
);

console.log( 3 );

setTimeout(
    () => { // g
        console.log( 4 );
    },
    1000
);

console.log( 5 );