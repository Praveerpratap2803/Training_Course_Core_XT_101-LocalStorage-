// EXERCISE: Explore "computed properties"
// When we say john.fullName we should get 'John Doe'
let john = {
    firstName: 'John',
    lastName: 'Doe'
};

john = new Proxy( john, {
    get( target, prop ) {
        // console.log( target, prop );

        if( prop === 'fullName' ) {
            return target.firstName+" "+target.lastName;
        } else if( target[prop] !== undefined ) {
            return target[prop];
        }
    }
});

console.log( john.firstName );
console.log( john.lastName );
console.log( john.fullName );