/**
 * Create a common prototype with these methods
 * - addToCast( member ) : adds the member to the cast
 * - addToCollection( amount ) : adds the amount to the existing collection
 */

const moviePrototype = {
    addToCast( member ){
        this.member.push(member) 
    },
    
    addToCollection(amount){
        this.amount += amount
    }
};
/*
const pushpa1 = Object.create(moviePrototype);

pushpa1.name='Pushpa1';
pushpa1.year=2020;
pushpa.collection=100;
pushpa1.addToCollection(200)
*/
 const pushpa = {
    name: 'Pushpa',
    year: 2022,
    cast: [ 'Allu Arjun', 'Rashmika' ],
    collection: 200
};
pushpa.__proto__=moviePrototype;

const laalSingh = {
    name: 'Laal Singh Chaddha',
    year: 2022,
    cast: [ 'Aamir Khan', 'Kareena Kapoor' ],
    collection: 300
};
laalSingh.__proto__=moviePrototype;
//console.log(pushpa1)

pushpa.addToCast('Fahad Fazil')
pushpa.addToCollection(100);
laalSingh.addToCast('Naga chaitanya')
laalSingh.addToCollection(100);

console.log(pushpa)
console.log(laalSingh)



