// FIRST OPTION

function wordsUppercase (words) {
    let wordsArr = words.replaceAll(',', '')
                        .replaceAll('!', '')
                        .replaceAll('?', '')
                        .replaceAll('.', '')
                        .split(' ');
    console.log(wordsArr)
    let result = [];

    wordsArr.forEach(word => {
        result.push(word.toUpperCase());
    });
    console.log(result.join(', '))
}

// SECOND OPTION

function wordsUppercase (words) {
    let wordsArr = words.split(/\W+/);
    let result = [];

    wordsArr.forEach(word => {
        if (word) {
            result.push(word.toUpperCase());
        }
    });
    console.log(result.join(', '))
}

wordsUppercase('Hi, how are you?')
wordsUppercase('hello')