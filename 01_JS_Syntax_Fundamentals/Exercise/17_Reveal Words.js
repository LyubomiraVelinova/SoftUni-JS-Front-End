function solve(words, text) {
    wordsArr = words.split(', ');
    textArr = text.split(' ');
    for (const wordFomWords of wordsArr) {
        for (const wordFromText of textArr) {
            if (wordFromText.length === wordFomWords.length && wordFromText.charAt(0) === '*') {
                text = text.replace(wordFromText, wordFomWords);
            }
        }
    }   
    console.log(text)
}

solve('great','softuni is ***** place for learning new programming languages')
solve('great, learning','softuni is ***** place for ******** new programming languages')
