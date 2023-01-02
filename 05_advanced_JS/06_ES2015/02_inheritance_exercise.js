class Movie{
    constructor( name, year, cast, collection ) {
    this.name = name;
    this.year = year;
    this.cast = cast;
    this.collection = collection;
    }
    addToCast(member){
        this.cast.push( member );
    }
    addToCollection( amount ) {
        this.collection += amount;
    }
}

// To make sure instanceof operator works fine even on old browsers






/**
 * Add resolution property
 * Add a method for AnimatedMovie
 *  - changeResolution( resolution ) : Changes resolution
 * 
 * Also tie up the prototypes appropriately so that we can also call addToCast(), addToCollection() on AnimatedMovie objects
 */
class AnimatedMovie extends Movie{
    constructor( name, year, cast, collection, dubbingArtists, animationStudio, resolution ) {
    super(  name, year, cast, collection );

    this.dubbingArtists = dubbingArtists;
    this.animationStudio = animationStudio;
    this.resolution = resolution;
    
    }
    changeResolution( resolution ) {
        this.resolution = resolution;
    }
}





const tomNJerry = new AnimatedMovie(
    'Tom n Jerry', 1956, [ 'Tom', 'Jerry' ], 100,
    [
        { character: 'Tom', artist: 'John' },
        { character: 'Jerry', artist: 'Jane' }
    ],
    'Walt Disney', '4K'
);

tomNJerry.changeResolution( '8K' ); // test out AnimatedMovie method
tomNJerry.addToCast( 'Fat Lady' ); // test out Movie method

console.log( tomNJerry );

console.log( tomNJerry instanceof AnimatedMovie ); // true
console.log( tomNJerry instanceof Movie ); // true