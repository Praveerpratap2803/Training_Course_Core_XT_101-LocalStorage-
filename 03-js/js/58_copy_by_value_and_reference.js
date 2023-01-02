
const x=100;
let y=x;
y++;

console.log(x);
console.log(y);

const john ={
    name:'john',
    age:20,
    address:{
        city:'mum',
        pinCode:2
    }
}

const praveer = john;//copy by reference

praveer.age++;
console.log(john.age)
console.log(praveer.age)

const number = [1,2,3,4]
const nums = number;//copy by reference

nums.push(5);

console.log(nums)
console.log(number)

//for proper copy

const praveerDeepCopy={
    name : john.name,
    age : john.age,
    address:{
        city:john.address.city,
        pinCode:john.address.pinCode
    }
}

praveerDeepCopy.age++;
praveerDeepCopy.address.pinCode=28
console.log(praveerDeepCopy)
console.log(john)












