let a=[1,9,5,3,2,3,4,5]

// a.map(function(i){
//     console.log(i)
// })
// a.map(i=>console.log(i))
a.forEach(i=>console.log(i))

let b = a.filter(function(i){
    if(i>7){
        return i
    }
})
console.log(b)