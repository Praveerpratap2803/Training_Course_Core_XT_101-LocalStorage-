
const moviePrototype={
    addToCollection(amount){
        this.collection += amount
    }
}

const animatedMoviePrototype = {
    changeResolution(resolution){
        this.resolution = resolution;
    }
}
//animatedMoviePrototype.__proto__=moviePrototype;
const movie1= {
    name: 'ABCD',
    collection:100,
    AnimatedStdio:'Dharma',
    resolution : "4k"
}
movie1.__proto__=animatedMoviePrototype;
const movie2= {
    name: 'ABCD2',
    collection:200,
    AnimatedStdio:'Dharma',
    resolution : "8k"
}
movie2.__proto__=animatedMoviePrototype;

movie1.changeResolution("8k");
movie1.addToCollection(200)
console.log(movie1)
























