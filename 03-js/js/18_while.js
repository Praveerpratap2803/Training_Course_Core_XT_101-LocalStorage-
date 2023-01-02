let count = 1;
let sum = 0;

while( count <= 10 ) {
    console.log( count );
    sum += count;
    ++count;
}

console.log( 'sum =', sum );
console.log( 'end of loop' );