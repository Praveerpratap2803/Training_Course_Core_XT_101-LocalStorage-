"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age, spouse) {
        this.name = name;
        this.age = age;
        if (spouse) {
            this.spouse = spouse;
        }
    }
    Person.prototype.celebrateBirthday = function () {
        if (typeof this.age === 'number') {
            this.age++;
        }
    };
    return Person;
}());
var john = new Person('John', 32);
john.celebrateBirthday();
console.log(john);
var jane = new Person('Jane', 28, john);
console.log(jane);
