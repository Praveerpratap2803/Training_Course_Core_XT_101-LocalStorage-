const john ={
    name:'John',
    age:32,
    emails:['john@example.com'],
    celebrateBirthday(){
        this.age++;
    },
    addEmail(email){
        this.emails.push(email);
    }

}

john.celebrateBirthday();
john.addEmail('john@gmail.com')
const jane ={
    name:'Jane',
    age:28,
    email:['jane@example.com']

}

console.log(john)

john.celebrateBirthday.call(jane);
john.addEmail.call(jane,'jane@gmail.com')
console.log(jane);

const mark = {
    name:'mark'
}













