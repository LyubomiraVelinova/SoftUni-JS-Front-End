// FIRST VARIATION

// function solve(word, text) {
//     let textArr = text.split(' ');
//     let isFound = false;
//     for (const w of textArr) {
//         if (word === w.toLowerCase()) {
//             console.log(word);
//             isFound = true;
//             break;
//         }
//     }
//     if (isFound === false) {
//         console.log(`${word} not found!`)
//     }
// }

// SECOND VARIATION

function solve(word, text) {
    let textArr = text.split(' ');
    for (const w of textArr) {
        if (word === w.toLowerCase()) {
            return word;
        }
    }
    return `${word} not found!`;
}

console.log(solve('javascript','JavaScript is the best programming language'))
console.log(solve('python','JavaScript is the best programming language'))