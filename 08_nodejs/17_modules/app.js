const {Employee}=require('./Employee.js')


const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );
john.promote();
jane.promote();
john.celebrateBirthday();
jane.changeName( 'Janette' );

console.log( john );
console.log( jane );

console.log( john instanceof Employee );
console.log(global.sum(12,13))


