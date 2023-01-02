const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@sapient.com'
    ],
    address: {
        area: 'Mulund',
        city: 'Mumbai'
    }
};

const johnDeepCopy ={
    ...john,
    emails:[
        ...john.emails
    ],
    address:{
        ...john.address
    }
}
johnDeepCopy.age++;
johnDeepCopy.emails[0]='jonathan@gmail.com'
johnDeepCopy.address.area = 'Vashi';
console.log(john)
console.log(johnDeepCopy)






