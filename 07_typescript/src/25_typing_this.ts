


type Person = {
    name:string,
    age:number
}

function printPerson(this:Person){
    console.log(this);
}

printPerson.call({
    name:'John',
    age:32
})
//error
// printPerson.call({
//     name:'John',
    
// })

export{}














