function f(){
    const john = {
        name : 'john',
        age : 21
    }
    function g(){
        console.log('i am g');
    }
    return g;
}


const h = f();
h();
