
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.celebrateBirthday = function(){
    this.age++;
}
Person.prototype.changeName = function(name){
    this.name = name;
}

const john = new Person('John',32);
const jane =new Person('Jane',28);


john.celebrateBirthday();
john.changeName( 'Jonathan' );

jane.celebrateBirthday();
jane.changeName( 'Janette' );

console.log( john );
console.log( jane );












