const text=`
If you like math and CSS, you’ll love this one. We don’t need to use media queries to change the values of some CSS properties — font-size, padding, margin etc. — depending on the viewport width, with the CSS clamp function. But: we still need to use media queries for changing colors, borders, shadows and other CSS styles.


`
let text1=`
you’ll love this one. We don’t need to use media queries to change the values of some CSS properties — font-size, padding, margin etc. — depending on the viewport width, with the CSS clamp function. But: we still need to use media queries for changing colors, borders, shadows and other CSS styles.


`
console.log(text.indexOf('CSS'))
console.log(text.indexOf('CSS',23))


console.log(text.replace('CSS','abc'))
console.log(text.replace(/CSS/g,'abc'))
text1 = text1.replace(/CSS/g,'abc')
const words = text.split(' ')
console.log(words)
console.log(text1)

console.log(text.toLowerCase())
console.log(text.toUpperCase())








