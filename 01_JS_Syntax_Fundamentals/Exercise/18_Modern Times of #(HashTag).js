function solve(text) {
    let words = text.split(' ');
    let result = [];

    for (const word of words) {
        if (word.startsWith('#') && word.length > 1 && checkIfWordIsValid(word)) {
            result.push(word.slice(1));
        }
    }
    console.log(result.join('\n'));

    // function checkIfWordIsValid(myWord) {
    //     let myWordLowercase = myWord.toLowerCase().slice(1);
    //     let isValid = true
    //     for (let i = 0; i < myWordLowercase.length; i++) {
    //         if (!(myWordLowercase.charCodeAt(i) >= 97 && myWordLowercase.charCodeAt(i) <= 122)) {
    //             isValid = false;
    //             break
    //         }
    //     }
    //     return isValid;
    // }

    function checkIfWordIsValid(myWord) {
        let myWordLowercase = myWord.toLowerCase().slice(1);
        let isValid = true;

        for (const symbol of myWordLowercase) {
            let asciiCode = symbol.charCodeAt(0);
            if (!(asciiCode >= 97 && asciiCode <= 122)) {
                isValid = false;
                break;
            } 
        }
        return isValid;
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
// solve('The symbol # is known #variously in English-speaking #regions as the #number sign')