const f = () => {
    throw new Error( 'Some error from f' );
};

const g = () => {
    f(); // not in a try..catch -> g will throw the same error
    console.log( 'g after calling f' );
};

const h = () => {
    g(); // not in a try..catch -> h will throw the same error
    console.log( 'h after calling g' );
};

h();

console.log( 'some important piece of code' );