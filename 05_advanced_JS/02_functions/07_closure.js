function outer( o1 ) {
    function inner() { // closure of inner - { i1, o1 }
        let i1 = 1;

        console.log( o1, i1 );
        
        o1++;
        i1++;
    }

    return inner;
}

const inn1 = outer( 1 ); // inn1 has access to o1_a
const inn2 = outer( 1 ); // inn2 has access to o1_b

// The inn1() function is able to "remember" the o1_a variable
inn1(); // 1 1
inn1(); // 2 1
inn1(); // 3 1

inn2(); // 1 1
inn2(); // 2 1
inn2(); // 3 1