function solve(text) {
    let textArr = text.split(' ');
    for (const word of textArr) {
        if (word.charAt(0) === '#' && word.length !== 0) {
            console.log(word.slice(1, word.length));
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')