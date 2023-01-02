
function makeShoppingCart(){
    const items = [];

    const shoppingCart = {
        add(item){
            if(typeof item=== 'string'){
                items.push(item)
            }
        },
        show(){
            console.log(items)
        }
    };
    return shoppingCart;

}
const shoppingCart = makeShoppingCart();
shoppingCart.add('Soap')
shoppingCart.add('123')

shoppingCart.add( 123 );

shoppingCart.show();













