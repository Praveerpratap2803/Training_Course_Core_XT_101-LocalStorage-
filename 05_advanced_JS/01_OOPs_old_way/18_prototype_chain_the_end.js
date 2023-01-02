
// {} is equivalent to calling new Object() 
// Object.prototype is the default prototype
const personPrototype = {
    nationality: 'Indian',
    celebrateBirthday() {
        this.age++;
    }
};

const employeePrototype = {
    promote() {
        this.role = `Senior ${this.role}`;
    }
};

employeePrototype.__proto__ = personPrototype;

const john = {
    name: 'John',
    age: 32,
    role: 'Accountant',
    dept: 'Finance'
};

john.__proto__ = employeePrototype;

const jane = {
    name: 'Jane',
    age: 28,
    role: 'Web Developer',
    dept: 'IT'
};

jane.__proto__ = employeePrototype;

console.log( jane ); // jane
console.log( jane.__proto__ ); // employeePrototype
console.log( jane.__proto__.__proto__ ); // personPrototype
console.log( jane.__proto__.__proto__.__proto__ ); // default prototype object (Object.prototype)
console.log( jane.__proto__.__proto__.__proto__ === Object.prototype ); // true
console.log( jane.__proto__.__proto__.__proto__.__proto__ ); // null



// DO NOT modify Object.prototype - this is only an example (DO NOT TRY THIS AT OFFICE)
Object.prototype.printName = function() {
    console.log( `My name is ${this.name}` );
};

jane.printName();
john.printName();

console.log( jane.hasOwnProperty( 'name' ) ); // true (own)
console.log( jane.hasOwnProperty( 'nationality' ) ); // false (derived)















