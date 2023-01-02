import Movie from "./16_interface_exercise"


interface Animated extends Movie{
    dubbingArtists:string[],
    resolution:string,
    changeResolution:(resolution:string)=>void;
    
}


let tom:Animated ;
tom= {
    name:"Tom and Jerry",
    cast:["tom","Jerry"],
    dubbingArtists:["Richard Kind","Willium Hanna"],
    resolution:"4k",
    year:10,
    collection:100,
    addToCast(member){
        this.cast.push(member)
    },
    addToCollection(amount) {
        this.collection += amount;
    },
    changeResolution(resolution){
        this.resolution=resolution
    }

}

tom.addToCast("Quacker")
tom.addToCollection(100);
tom.changeResolution("16k")
console.log(tom)







