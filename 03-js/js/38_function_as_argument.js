
function print( person, getTitle ) {
    const title = getTitle( person );
    console.log( `${title} ${person.name} is ${person.age} years old` );
}


const john = {
    name: 'John',
    age:20,
    gender:'male'
}
const Jane = {
    name: 'Jane',
    age:21,
    gender:'female'
}

function getEnglishTitle(personx){
    return personx.gender === 'female' ? 'Ms.' : 'Mr.'
}
function getFrenshTitle(personx){
    return personx.gender === 'female' ? 's.' : 'r.'
}

print(john , getEnglishTitle);
print(Jane , getFrenshTitle);












