let sum=0;
let count;
for(count=1;count<1000;count++)
while(sum<1000)
{
    sum += count;
    if(sum>1000)
    {
        break;
    }
}
console.log(count,sum);

