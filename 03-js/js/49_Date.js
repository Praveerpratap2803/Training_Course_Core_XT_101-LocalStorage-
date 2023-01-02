
const independenceDay = new Date(1947 , 7 , 15)
console.log(independenceDay);
console.log(independenceDay.toLocaleDateString());
console.log(independenceDay.toLocaleTimeString());

console.log(independenceDay.getFullYear())
console.log(independenceDay.getMonth())
console.log(independenceDay.getDate())
console.log(independenceDay.getDay())


const ind =new Date(1947,7,15)
ind.setDate(independenceDay.getDate()+15);
console.log(ind);

const today = new Date();
console.log(today)
console.log(today.getHours())

Date.prototype.getFormattedDate = function(){
    const date =this.getDate().toString().padStart(2,'0');
    const month =this.getMonth().toString().padStart(2,'0');
    return `${date}-${month}-${this.getFullYear()}`;
}

console.log(today.getFormattedDate());


