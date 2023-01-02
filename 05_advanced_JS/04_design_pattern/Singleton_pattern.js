
function ShoppingCart(){
    function init(initialItems){
        const shoppingCart = (function makeShoppingCart() {
            // private data
            const items = initialItems;

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
        return shoppingCart;
    }
    return {
        getInstance(initialItems){
            if(ShoppingCart.instance === null){
                ShoppingCart.instance = init(initialItems);
            }
            return ShoppingCart.instance;
        }
    }

}
ShoppingCart.instance = null;

const cart1 = ShoppingCart().getInstance(['Soap','Bisuits']) 

const cart2 = ShoppingCart().getInstance( [ 'Soap', 'Bisuits' ] );

cart1.add( 'Chips' );
cart1.show();

console.log( '****' );

cart2.show();









