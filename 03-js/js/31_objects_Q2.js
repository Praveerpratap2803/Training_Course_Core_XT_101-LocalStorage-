const fav_movie={
    name:'3 Idiots',
    cast:['amir khan','Sharman Jhoshi','R Madhavan','Kareena Kapoor'],
    yearOfRelease:2009,
    boxOfficeCollection:400,
    addToCast(cast){
        this.cast.push(cast)
    },
    addToCollection(money){
        this.boxOfficeCollection + money;
    }

}


fav_movie.addToCast('salman');
fav_movie.addToCollection(100)
console.log(fav_movie);



