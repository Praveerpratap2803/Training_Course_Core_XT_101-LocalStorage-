"use strict";
/*
7. Define a function push() that accepts 2 arguments
* first argument is an array of numbers
* second is either a number or an array of numbers
If second argument is a number, the function adds the number to the end of the array. If second
argument is an array of numbers, the items of the array are pushed to the end of the array.
Your function push() should return the array (first argument it accepts).
Tip: You may use the spread operator to simplify your logic
*/
Object.defineProperty(exports, "__esModule", { value: true });
var push = function (a, b) {
    if (typeof b === "number") {
        a.push(b);
    }
    else {
        b.forEach(function (items) {
            a.push(items);
        });
    }
    return a;
};
var c = push([1, 2, 3, 4], 5);
console.log(c);
