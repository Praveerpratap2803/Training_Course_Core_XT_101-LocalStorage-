/**
 * Create AnimatedMovie that inherits from Movie, with dubbingArtists, animationStudio as extra properties
 */
 function Movie( name, year, cast, collection ) {
    this.name = name;
    this.year = year;
    this.cast = cast;
    this.collection = collection;
}

Movie.prototype.addToCast = function( member ) {
    this.cast.push( member );
};

Movie.prototype.addToCollection = function( amount ) {
    this.collection += amount;
}

function AnimatedMovie(name,year,cast,collection,dubbingArtists,Animated){
    Movie.call(name,year,cast,collection)
    this.dubbing
}






