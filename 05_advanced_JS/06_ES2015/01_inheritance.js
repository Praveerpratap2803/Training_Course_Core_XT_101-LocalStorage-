class Person {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }

    changeName( name ) {
        this.name = name;
        
    }
}

class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( `Happy birthday ${this.name}. Please use this voucher and treat yourself and friends to a good meal at your favorite restaurant` );
    }
}

// john, jane -> Employee.prototype -> Person.prototype
const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );

john.promote();
jane.promote();
john.celebrateBirthday();
jane.changeName( 'Janette' );

console.log( john );
console.log( jane );

console.log( john instanceof Employee );