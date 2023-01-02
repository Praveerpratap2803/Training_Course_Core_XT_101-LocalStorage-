const x=1;
console.log('x in global scope = ',x);
const z=2;
function outer(){
    const x=3;
    const y=2;
    console.log('x in outer function scope = ',x);
    console.log('y in outer function scope = ',y);
    console.log('z in outer function scope = ',z);
}

outer();

