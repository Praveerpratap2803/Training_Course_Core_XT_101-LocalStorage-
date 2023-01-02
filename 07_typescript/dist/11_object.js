"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var john = {
    name: 'John',
    age: 32
};
john.age = 'Thirty';
var jane;
//jane = 100
// jane ={
//     name:'Jane',
// };
//let john.name : Person;
jane = {
    name: 'Jane',
    age: 30,
    spouse: john
};
console.log(john, jane);
