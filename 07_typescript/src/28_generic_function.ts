// Generic function (we can use this to create the actual function)
// We can also restrict a generic parameter to certain allowed types using the "extends" syntax


function add<T extends string|number>(x:T,y:T){
    if( typeof x === 'number' && typeof y === 'number' ) {
        return x + y;
    } else if( typeof x === 'string' && typeof y === 'string' ) {
        return x + ' ' + y;
    }
}

add( 12, 13 ); // infers T as number and creates the actual function and calls it
add( 'John', 'Doe' ); // infers T as string and creates the actual function and calls it

//error
// add(true,false)
// add(12,'hello')
// add<number>(12,'hello')
export{}







