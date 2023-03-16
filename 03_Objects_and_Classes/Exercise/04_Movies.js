function movies(input) {
    let total = [];
    let currentObj = {};
    for (const element of input) {
        line = element.split(' ');
        if (line.includes('addMovie')) {
            let movieName = line
                .slice(1)
                .join(' ');
            currentObj.name = movieName;
            total.push(currentObj);
            currentObj = {};
        } else if (line.includes('directedBy')) {
            let [movie, director] = takeInfoByIndex(line, 'directedBy');
            for (const object of total) {
                if (object.name === movie) {
                    object.director = director;
                }
            }
        } else if (line.includes('onDate')) {
            let [movie, date] = takeInfoByIndex(line, 'onDate');
            for (const object of total) {
                if (object.name === movie) {
                    object.date = date;
                }
            }
        }
    }

    total.forEach(info => {
        if (info.hasOwnProperty('name') && info.hasOwnProperty('date') && info.hasOwnProperty('director')) {
            console.log(JSON.stringify(info))
        }
    });

    function takeInfoByIndex(array, keyWord) {
        let index = array.indexOf(keyWord);
        let beforeKeyWord = array.slice(0, index).join(' ');
        let afterKeyWord = array.slice(index + 1, array.length).join(' ');
        return [beforeKeyWord, afterKeyWord];
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

// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);
