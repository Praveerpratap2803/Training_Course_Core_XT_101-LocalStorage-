"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else if (typeof x === 'string' && typeof y === 'string') {
        return x + " " + y;
    }
}
console.log(add(12, 13));
console.log(add("Praveer", "Pratap"));
