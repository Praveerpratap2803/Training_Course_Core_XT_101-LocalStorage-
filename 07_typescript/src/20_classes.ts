

import IPerson from './15_interface';


class Person implements IPerson{
    readonly name:string;
    age:number|string;
    spouse?:Person;

    constructor(name:string,age:number,spouse?:Person){
        this.name = name;
        this.age=age;

        if(spouse){
            this.spouse=spouse;
        }

    }
    celebrateBirthday(){
        if(typeof this.age==='number'){
            this.age++;
        }
    }
}

const john = new Person('John',32);

john.celebrateBirthday();

console.log( john );

const jane = new Person( 'Jane', 28, john );
console.log( jane );

export {};






