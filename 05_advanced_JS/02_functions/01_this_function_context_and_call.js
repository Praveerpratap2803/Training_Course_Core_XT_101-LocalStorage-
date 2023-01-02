// "this" is called the function's context (function call context)
function foo() {
    console.log( this ); // global object in Node / window in browser
}

foo(); // "this" -> window
foo.call( { name: 'John' } ); // { name: 'John' }