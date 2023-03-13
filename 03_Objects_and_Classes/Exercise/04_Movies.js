function movies(input) {
    let allMovies = [];
    for (const line of input) {
        let moviesInfo = {};
        let currentArr = line.split(' ');
        if (getMovieName(currentArr)) {
            let movie = getMovieName(currentArr);
            moviesInfo['name'] = movie;
        } else if (getDirectorName(currentArr)) {
            let movie = getDirectorName(currentArr)[0];
            let director = getDirectorName(currentArr)[1];
            if (moviesInfo['name'] === movie) {
                moviesInfo['director'] = director;
            }
        } else if (getMovieDate(currentArr)) {
            let movie = getMovieDate(currentArr)[0];
            let date = getMovieDate(currentArr)[1];
            if (moviesInfo['name'] === movie) {
                moviesInfo['date'] = date;
            }
        }
        allMovies.push(moviesInfo);
    }
    console.log(allMovies);

    function getMovieName(array) {
        const COMMAND = 'addMovie';
        if (array.includes(COMMAND)) {
            array.shift();
            let movieName = array.join(' ');
            return movieName;
        }
    }

    function getDirectorName(array) {
        const FIRST_SUBSTRING = 'directedBy';
        if (array.includes(FIRST_SUBSTRING)) {
            let index = array.indexOf(FIRST_SUBSTRING);
            let movieName = array.slice(0, index);
            let directorName = array.slice(index + 1, array.length);
            return [movieName.join(' '), directorName.join(' ')];
        }
    }

    function getMovieDate(array) {
        const SECOND_SUBSTRING = 'onDate';
        if (array.includes(SECOND_SUBSTRING)) {
            let movieDate = array.pop();
            let index = array.indexOf(SECOND_SUBSTRING);
            let movieName = array.slice(0, index);
            return [movieName.join(' '), movieDate];
        }
    }
}


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
