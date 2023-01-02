"use strict";
// Generic function (we can use this to create the actual function)
// We can also restrict a generic parameter to certain allowed types using the "extends" syntax
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else if (typeof x === 'string' && typeof y === 'string') {
        return x + ' ' + y;
    }
}
add(12, 13); // infers T as number and creates the actual function and calls it
add('John', 'Doe'); // infers T as string and creates the actual function and calls it
