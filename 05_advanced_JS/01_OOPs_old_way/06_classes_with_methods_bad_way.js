

function Person(name,age){
    this.name = name;
    this.age = age;

    this.celebrateBirthday = function(){
        this.age++;
    };
    this.changeName = function(name){
        this.name = name;
    }

    const john = new Person('John',32);

    john.celebrateBirthday();
    john.changeName('Praveer');
    console.log(john);
    const jane = new Person('Jane',28);
}














