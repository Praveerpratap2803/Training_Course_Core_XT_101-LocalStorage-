

import IPerson from './15_interface';


class Person implements IPerson{
    //readonly name:string;
    //age:number|string;
    public spouse?:Person;
    //private aadharNumber : string;
    // 
    constructor(public name:string,public age:number,private aadharNumber:string,spouse?:Person){
        this.name = name;
        this.age=age;
        this.aadharNumber=aadharNumber;
        if(spouse){
            this.spouse=spouse;
        }

    }
    celebrateBirthday(){
        if(this.isNumber(this.age)){
            this.age++;
        }
    }
   private isNumber(val: any):val is number {
        return typeof val === 'number'
    }
}

const john = new Person('John',32,"1234-2345-3456");

john.celebrateBirthday();

console.log( john );

const jane = new Person( 'Jane', 28, "9876-8765-7654",john );
console.log( jane );

export {};






