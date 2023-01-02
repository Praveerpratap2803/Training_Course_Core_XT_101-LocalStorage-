// Generators are function, a special kind of function
// A function that can pause and resume, pause and resume, ...
// A generator function is indicated by a * before the function name
function *counter() {
    let i = 0;

    // yielded value will actually be { value: 0, done: false }
    yield i; // the function pauses execution (does not stop)

    ++i;
    yield i; // { value: 1, done: false }

    ++i;
    yield i; // { value: 2, done: false }

    ++i;
    yield i; // { value: 3, done: false }

    // return undefined;
}

// 2 steps are required to "resume" function execution

// DOES NOT start executing the function
// It returns an iterator object that helps us to step-through the function
const iterator = counter();

// starts executing the function from where it had left
console.log( iterator.next() ); // { value: 0, done: false }
console.log( iterator.next() ); // { value: 1, done: false }
console.log( iterator.next() ); // { value: 2, done: false }
console.log( iterator.next() ); // { value: 3, done: false }
console.log( iterator.next() ); // { value: undefined, done: true }



function *counter(){
    let i
    yield i;
    ++i;
    yield i;
    ++i;
    yield i;
    ++i;
    yield i;
    ++i;

}














