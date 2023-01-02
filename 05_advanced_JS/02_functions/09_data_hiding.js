// In essence, private data members are variables that can be used by the methods of the object, which no one else can use
const shoppingCart = {
    items: [],
    add( item ) {
        if( typeof item === 'string' ) {
            this.items.push( item );
        }
    },
    show() {
        console.log( this.items );
    }
};

shoppingCart.add( 'Soap' );
shoppingCart.add( '123' );

// In languages like C++, Java etc. where items would be made private this is not possible
shoppingCart.items.push( 123 );
shoppingCart.show();