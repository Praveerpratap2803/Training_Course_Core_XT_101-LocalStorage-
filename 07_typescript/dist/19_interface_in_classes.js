"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = /** @class */ (function () {
    function Rectangle(l, b, color) {
        this.l = l;
        this.b = b;
        this.color = color;
    }
    Rectangle.prototype.area = function () {
        return this.l * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.l + this.b);
    };
    ;
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(r, color) {
        this.r = r;
        this.color = color;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.r, 2);
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.r;
    };
    return Circle;
}());
var monitor = new Rectangle(12, 9, 'black');
console.log(monitor.area());
var pizza = new Circle(8, 'black');
console.log(pizza.area());
