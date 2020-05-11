//  Movies exercise

const movies = fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`)
.then((response) => response.json())
.then((movies) => {
arrayOfBadMovies(movies);

   
});

// an array of bad movies

const arrayOfBadMovies = (movies) => {

    const arrayOfBadMoviesIs = movies.filter((item) => {
        if(item.rating < 5 ) {
            return true
        }
    })
// array of bad movies since year 2000

const arrayOfBadMoviesSince2000 = arrayOfBadMoviesIs.filter((item) => {
    if(item.year >= 2000) {
        return true
 }
})

// array of the titles of the bad movies since year 2000

const arrayOfBadMoviesTitle = arrayOfBadMoviesSince2000.map((item) => {
    return item.title
})

   console.log('Array of bad movies :- ',arrayOfBadMoviesIs)
   console.log('Array of bad movies since year 2000 :-', arrayOfBadMoviesSince2000)
   console.log('Array of titles of bad movies since year 2000 :-',arrayOfBadMoviesTitle)
} 





 
