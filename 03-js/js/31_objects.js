
const john = {
    "name":'Praveer',
    age:21,
    emails:[
        'pra.gmail.com',
        'p.gmail.com'
    ],
    address:{
        city:'pune',
        pincode:411023
    }

};
//console.log(john[age]);
console.log(john.name);
console.log(john.emails[1]);
console.log(john.address.pincode);

john.age++;
john.address.city='mum';

console.log(john)

john.height={
    feet:6
}

console.log(john)




















