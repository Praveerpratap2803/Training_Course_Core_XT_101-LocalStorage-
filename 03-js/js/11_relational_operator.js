// <, >, <=, >=
let x = 12, y = 13;
console.log( x < y ); // true
console.log( x + 1 < y ); // false
console.log( x + 1 <= y ); // true

console.clear();

// ==, !=, ===, !==
console.log( x + 1 == y ); // true
console.log( x != y ); // true

let quantity = '1', z = 1;
console.log( z == quantity ); // true

// GOOD PRACTICE: Always use ===
// if data type is not same, then evaluates to false (no further comparison of value)
console.log( z === quantity ); // false

// EXERCISE: Check out !== vs !=

console.log(z !== quantity);




