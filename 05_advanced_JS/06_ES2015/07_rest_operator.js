
// ES2015 "rest" operator (overloaded with "spread")
// ...
// 3 situations in which to use rest
// 2 situations in which to use spread

const john = {
    name: 'John',
    age: 32,
    emails: [
        'john@gmail.com',
        'john@sapient.com'
    ],
    address: {
        area: 'Mulund',
        city: 'Mumbai',
        pinCode: 400101
    }
};


const{
    name,
    address:{
        city,
        ...restOfAddress
    },
    ...restOfDetails
}=john;

console.log(restOfAddress)
console.log(restOfDetails)

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const[first,second,,third,...restOfDays]=days;

console.log(restOfDays)




// const sum = (transform, ...args)=>{
//     let result =0;
//     for(let i=0;i<args.length;i++){
//         result += transform(args[i]);
//     }
//     return result;
// }

// console.log(sum(x=>x*x,1,2,3,4,5))


const sum = ( ...args)=>{
    let result =0;
    for(let i=0;i<args.length;i++){
        result += args[i];
        var j=9;
    }
    
    return result;
}

console.log(sum(1,2,3,4,5))
