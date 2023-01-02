
type Person ={
    readonly name:string,
    age:number|string,
    spouse?:Person
};

const john :Person= {
    name:'John',
    age:32 as number|string
}

john.age = 'Thirty';

let jane : Person;
//jane = 100
// jane ={
//     name:'Jane',
    
// };
//let john.name : Person;
jane ={
    name:'Jane',
    age:30,
    spouse:john
};
console.log(john,jane)
export{}










