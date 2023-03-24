// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map( m => {
    return m.director;
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter(m => m.director == director) 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let cont = 0;
  let result = array.reduce((sum, movie) =>{
    if(movie.director == director){
      cont ++;
      return sum+ movie.score;
    }
    else return sum;
  }, 0)

  return result / cont;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = [...array];
  result.sort((movie1, movie2 ) => {
    if(movie1.title >= movie2.title) return 1;
    else return -1;
  });

  return result
  .map(({ title }) => title)
  .filter((movie, index) => index < 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array];
  result.sort((movie1, movie2 ) => {
    if(movie1.year > movie2.year) return 1;
    else if (movie1.year < movie2.year)  return -1;
    else {
      if (movie1.title >= movie2.title) return 1
      else return -1;
    }
  });

  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let cont = 0;
  let result = array.reduce((sum, movie) =>{
    //Buscamos el genero
    for (let i = 0; i < movie.genre.length; i++) {
      //Si tiene el genero que queremos...
      if(movie.genre[i] == category){
        //Comprobamos si tiene score, sumamos uno al contador y sumamos la puntuación
        if(movie.score){
          cont ++;
          return sum + movie.score;      
        } 
        //No sumamos nada porque no tiene score 
        else return sum;  
      }
      //Devolvemos el score
      else return sum;
    }
  }, 0)

  //Si tiene decimales redondeamos a 2 decimales
  if( Math.round(result/cont) != average)
    return parseFloat((result/cont).toFixed(2))
  //Si no los tiene lo pintamos directamente
  else
    return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
