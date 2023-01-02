const john ={
    name:'John',
    
    emails:[{
        type:'personal',value:'john@example.com'}],
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

john.celebrateBirthday.apply(jane);
console.log(jane);
john.addEmail.apply(jane,['jane@gmail.com'])
console.log(jane);















