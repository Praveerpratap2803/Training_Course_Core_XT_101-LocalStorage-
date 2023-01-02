

/**
 * Interface has 2 uses
 * 1. Can be used as type for an object
 * 2. Can be used to make sure that a class has certain data and methods
 */
 interface Person {
    readonly name: string,
    age: number | string,
    spouse?: Person,
    celebrateBirthday: () => void
};

const john : Person = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        if( typeof this.age === 'number' ) {
            this.age++;
        }
    }
};

let jane : Person;

jane = {
    name: 'Jane',
    age: 'Twenty Eight',
    spouse: john,
    celebrateBirthday() {
        if( typeof this.age === 'number' ) {
            this.age++;
        }
    }
};

john.spouse = jane;

console.log( john, jane );

export default Person;



















