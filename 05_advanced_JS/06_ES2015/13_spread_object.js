

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

const johnCopy = {...john};
johnCopy.age++;
johnCopy.emails.push('john@outlook.com')
console.log(john)
console.log(johnCopy)

const johnEmployment ={
    name: 'Jonathan',
    company: 'Sapient',
    role: 'Accountant',
    dept: 'Finance'
}

const johnAllDetails = {
    nationality :'Indian',
    ...john,
    ...johnEmployment,
    spouse: {
        name: 'Jane',
        age: 28
    },
    age:60
}
console.log(johnAllDetails);

