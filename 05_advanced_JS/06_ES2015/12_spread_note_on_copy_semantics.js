
const persons = [
    {
        name:'john',
        age:32
    },
    {
        name:'john',
        age:32
    },
    {
        name:'john',
        age:32
    }
]
// We are creating a new array
// i.e. persons and personsCopy are 2 different arrays

// The items are non-primtives (objects) - the copy happens by reference
// persons[0] is SAME as personsCopy[0]

const personsCopy = [...persons];
personsCopy.push({
    name:'Praveer',
    age:21
});


personsCopy[0].age++;
console.log(personsCopy)
console.log(persons)











