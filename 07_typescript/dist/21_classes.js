"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age, aadharNumber, spouse) {
        this.name = name;
        this.age = age;
        this.aadharNumber = aadharNumber;
        if (spouse) {
            this.spouse = spouse;
        }
    }
    Person.prototype.celebrateBirthday = function () {
        if (this.isNumber(this.age)) {
            this.age++;
        }
    };
    Person.prototype.isNumber = function (val) {
        return typeof val === 'number';
    };
    return Person;
}());
var john = new Person('John', 32, "1234-2345-3456");
john.celebrateBirthday();
console.log(john);
var jane = new Person('Jane', 28, "9876-8765-7654", john);
console.log(jane);
