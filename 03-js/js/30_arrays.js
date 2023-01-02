const num = [10,20,30,40,'fifty']

console.log(num);
console.log(num[0]);
console.log(num[3]);
console.log(num[5]);

num[0]= num[1]+num[2];
console.log(num);

num[5]=60;
console.log(num)
num[9]=60;
console.log(num)
console.log(num[8])

num.push(1000);
console.log(num)
console.log(num.length)
console.log(typeof num)
console.log(num instanceof Array)











