

const numbers =[10,20,30,40]
numbers.push(50);
let num=numbers.pop();
console.log(num)
console.log(numbers)

// Explore: unshift(), shift() - adds / removes an item at the start of the array
// splice( num_before_which_you_want_to_add, how_many_numbers_to_delete, num_1_to_Add, num_2_to_Add, ... )

numbers.splice(2,0,24,25,26);
console.log(numbers)

// let's delete 26, 30; and add 27, 30 at the SAME delete
// splice( num_before_which_you_want_to_add/at_which_you want_to_delete, how_many_numbers_to_delete, num_1_to_Add, 
numbers.splice( 4, 2, 27, 35 ); // [ 10, 20, 24, 25, 27, 35, 40 ]
console.log( numbers );

console.log( numbers.includes( 27 ) ); // true
console.log( numbers.includes( 28 ) ); // false

console.log( numbers.indexOf( 27 ) ); // 4
console.log( numbers.indexOf( 27, 5 ) ); // -1 (27 is not present after index 5)
console.log( numbers.indexOf( 28 ) ); // -1
console.log( numbers);
console.log( numbers.join( ' , ' ) );

const baseLocations = [ 'Noida', 'Bengaluru', 'Mumbai', 'Gurugram' ];
baseLocations.sort();
console.log( baseLocations );
nums1=[99,56,34,12,2]
// the helper must return -ve number if first argument (x) should come before second argument (y) in sorted order, and vice versa. It returns 0 if both arguments can be considered equal.
nums1.sort( // we want ascending order
    // helper for sort(). It helps sort() decide which number comes before which number
    // EXERCISE: How can we shorten this logic and still have sorting work fine? Hint: Returning any +ve / -ve number satisfying the helper function requirement will do
    function( x, y ) {
        if( x < y ) { // first number passed to this function should come first
            return -1;
        }

        if( y < x ) { // second number passed to this function should come first
            return 1;
        }

        return 0;
    }
);
console.log( nums1 );


































