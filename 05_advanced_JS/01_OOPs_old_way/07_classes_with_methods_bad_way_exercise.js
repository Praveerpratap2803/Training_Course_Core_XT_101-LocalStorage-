/**
 * Modify your Movie class by adding 2 methods for every object
 * - addToCast( member ) : Adds member to the cast
 * - addToCollection( amount ) : Adds the amount to existing collection
 */
 function Movie( name, year, cast, collection ) {
    this.name = name;
    this.year = year;
    this.cast = cast;
    this.collection = collection;

    this.addToCast = function( member ) {
        this.cast.push( member );
    };

    this.addToCollection = function( amount ) {
        this.collection += amount;
    }
}

const pushpa = new Movie( 'Pushpa', 2022, [ 'Allu Arjun', 'Rashmika' ], 200 );
pushpa.addToCast( 'Fahad Fazil' );
pushpa.addToCollection( 100 );

const laalSingh = new Movie( 'Laal Singh Chaddha', 2022, [ 'Aamir Khan', 'Kareena Kapoor' ], 300 );
laalSingh.addToCast( 'Naga Chaitanya' );
laalSingh.addToCollection( 100 );

console.log( pushpa );
console.log( laalSingh );