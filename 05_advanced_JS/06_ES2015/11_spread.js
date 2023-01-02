

const num1 = [1,2,3],num2 = [4,5,6];

const copyNum1 = num1;

copyNum1[0] = 20;
console.log(num1)

const copyNum2 = [...num2];
num2[0]=21;
console.log(num2)
console.log(copyNum2)

//
const num3 = [1,2,3],num4 = [4,5,6];
const num5 =[...num3,...num4]

console.log(num5)








