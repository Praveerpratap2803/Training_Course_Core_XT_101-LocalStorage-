/**
 * Module pattern
 * We have an object with "private" data members and methods
 */
 const shoppingCart = (function makeShoppingCart() {
    // private data
    const items = [];

    // private method
    function isString( val ) {
        return typeof val === 'string';
    }

    // public data member and methods
    const shoppingCart = {
        // items: [],
        add( item ) {
            if( isString( item ) ) {
                items.push( item );
            }
        },
        show() {
            console.log( items );
        }
    };

    return shoppingCart;
})();

shoppingCart.add( 'Soap' ); // added
shoppingCart.add( '123' ); // added
shoppingCart.add( 123 ); // ignored

shoppingCart.show();















