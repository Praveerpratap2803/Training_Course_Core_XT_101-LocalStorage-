"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contains = function (x, y) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] === y) {
            return true;
        }
    }
    return false;
};
//console.log(contains([1,2,3],4))
console.log(contains([1, 'hello', 3, true], 3)); // prints true
console.log(contains([1, 'hello', 3, true], 5)); // prints false
