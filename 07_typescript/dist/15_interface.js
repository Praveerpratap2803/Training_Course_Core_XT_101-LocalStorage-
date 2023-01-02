"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var john = {
    name: 'John',
    age: 32,
    celebrateBirthday: function () {
        if (typeof this.age === 'number') {
            this.age++;
        }
    }
};
var jane;
jane = {
    name: 'Jane',
    age: 'Twenty Eight',
    spouse: john,
    celebrateBirthday: function () {
        if (typeof this.age === 'number') {
            this.age++;
        }
    }
};
john.spouse = jane;
console.log(john, jane);
