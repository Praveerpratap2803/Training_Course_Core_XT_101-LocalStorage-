const personPrototype = {
    nationality: 'Indian',
    celebrateBirthday() {
        this.age++;
    }
};

const john = Object.create( personPrototype ); // john ({}) -> personPrototype

// john has name, age as its "own properties"
john.name = 'John';
john.age = 32;

console.log( john );
console.log( john.__proto__ );

// john has nationality as a "derived property"
console.log( john.nationality );

const jane = Object.create( personPrototype ); // jane ({}) -> personPrototype

// jane's own properties
jane.name = 'Jane';
jane.age = 28;

console.log( jane );
console.log( jane.__proto__ );
console.log( jane.nationality );