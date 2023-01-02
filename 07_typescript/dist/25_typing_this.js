"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPerson() {
    console.log(this);
}
printPerson.call({
    name: 'John',
    age: 32
});
