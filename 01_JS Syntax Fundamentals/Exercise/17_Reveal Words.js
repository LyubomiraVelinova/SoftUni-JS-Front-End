function solve(words, text) {
    words.split(', ');
    text.split(' ');
    text.forEach(word => {
        if (word.pop() === '*') {
            word.replace(words[0])
        } 
    });
    console.log(text)
}

solve('great', 'softuni is ***** place for learning new programming languages')
