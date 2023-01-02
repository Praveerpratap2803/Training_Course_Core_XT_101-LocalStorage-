function Person( name, age ) {
    this.name = name;
    this.age = age;
    
    this.celebrateBirthday = function() {
        this.age++;
    };

    this.changeName = function( name ) {
        this.name = name;
    };
}

console.log('Person.prototype',Person.prototype);

const john = new Person( 'John', 32 );
const jane = new Person( 'Jane', 28 );

console.log( 'john.__proto__ = ', john.__proto__ );
console.log( 'jane.__proto__ = ', jane.__proto__ );

console.log( john.__proto__ === jane.__proto__ ); // true
console.log( john.__proto__ === Person.prototype ); // true


