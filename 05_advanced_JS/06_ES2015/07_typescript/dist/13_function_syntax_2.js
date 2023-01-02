"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sum1 = function (x, y) { return x + y; };
var sum2 = function (x, y) {
    return x + y;
};
console.log(sum1(12, 13));
console.log(sum2(12, 14));
var sum = function (transform) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log('args = ', args);
    var result = 0;
    for (var i = 0; i < args.length; i++) {
        result += transform(args[i]);
    }
    return result;
};
console.log(sum(function (x) { return x * x; }, 10, 20, 30));
console.log(sum(Math.sqrt, 1, 4, 9, 16));
