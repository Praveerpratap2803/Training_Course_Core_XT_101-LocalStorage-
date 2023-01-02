function Person( name, age ) {
    this.name = name;
    this.age = age;
}

Person.prototype.celebrateBirthday = function() {
    this.age++;
};

Person.prototype.changeName = function( name ) {
    this.name = name;
};

function Employee( name, age, role, dept ) {
    Person.call( this, name, age );

    this.role = role;
    this.dept = dept;
}

Employee.prototype = Object.create( Person.prototype ); // {} -> Person.prototype

Employee.prototype.promote = function() {
    this.role = `Senior ${this.role}`;
};

// john, jane -> Employee.prototype -> Person.prototype
const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );

john.promote();
jane.promote();
john.celebrateBirthday();
jane.changeName( 'Janette' );

console.log( john );
console.log( jane );