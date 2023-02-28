function solve(word, text) {
    let textArr = text.split(' ')
    let isFound = false
    for (const w of textArr) {
        if (word === w.toLowerCase()) {
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (isFound === false) {
        console.log(`${word} not found!`)
    }
}

solve('javascript','JavaScript is the best programming language')
solve('python','JavaScript is the best programming language')