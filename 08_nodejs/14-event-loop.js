// Event Queue: It is a queue of functions waiting to be executed
// t = 0
    // print 1 3 5
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue
// Check the queue - Will node find any function queued? - NO
// t = 2 (alarm clocks ring)
    // f, g get queued in the event queue
// Check the queue - Will node find any function queued? - YES
// f and g are picked up one-by-one and get executed
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
    2000
);

console.log( 5 );