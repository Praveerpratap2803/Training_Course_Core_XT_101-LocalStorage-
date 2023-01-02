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

john.promote();
jane.promote();

john.celebrateBirthday();
jane.celebrateBirthday();

console.log( john );
console.log( jane );


















