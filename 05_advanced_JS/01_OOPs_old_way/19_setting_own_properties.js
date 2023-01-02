const personPrototype = {
    nationality: 'Indian',
    celebrateBirthday() {
        this.age++;
    }
};

const jane ={
    name:'Jane',
    age:28
}

const john ={
    name:'John',
    age:32
}
john.__proto__ = personPrototype;

jane.nationality = 'American';
console.log(jane.nationality);
console.log(john.nationality);






