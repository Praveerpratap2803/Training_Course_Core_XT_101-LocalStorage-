(function() {
    'use strict'; // avoid use of variables without declaring them using let, const, var

    const x = 1; // global
    console.log( 'x [in global scope] = ', x );

    const z = 1; // global

    function outer() {
        const x = 3;
        const y = 2;

        
        // inner can be used only within outer
        function inner() {
            const x = 4;
            const a = 5;
            
            if( true ) {
                var b = 6; // not global, not block-scoped
            }

            }

        inner();

    }

    outer();

    })();