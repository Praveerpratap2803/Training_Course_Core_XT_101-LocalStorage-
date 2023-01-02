
const {Person,printPerson}=require('./Person.js')
class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( `Happy birthday ${this.name}. Please use this voucher and treat yourself and friends to a good meal at your favorite restaurant` );
    }
}

const mark = new Person('Mark',40);
//logPerson(mark)
global.sum = (x,y)=>{
    return x+y;
}
module.exports={
    Employee
}