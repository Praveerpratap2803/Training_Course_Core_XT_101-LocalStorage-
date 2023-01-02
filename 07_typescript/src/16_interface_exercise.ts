


interface Movie{
    name:String,
    cast:string[],
    year:number,
    collection:number,
    addToCast : (member:string)=> void
    addToCollection : (amount:number)=>void
}
let PK:Movie;

PK = {
    name:"PK",
    cast:["Amir Khan","Kareena Kapoor"],
    year:7,
    collection:500,
    addToCast(member){
        this.cast.push(member)
    },
    addToCollection(amount) {
        this.collection += amount;
    },

}

PK.addToCast("Shushant Singh Rajput")
PK.addToCollection(100);

console.log(PK)

export default Movie





