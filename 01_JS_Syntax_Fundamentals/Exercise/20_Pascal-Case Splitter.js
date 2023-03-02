// function solve(string) {
//     let word = '';
//     let words = [];
//     for (const char of string) {
//         if (char === char.toUpperCase() && word !== '') {
//             words.push(word);
//             word = char;
//         } else {
//             word += char;
//         }
//     }
//     console.log(words.join(', '));
// }

function solve(string) {
    let word = string.charAt(0);
    let words = [];
    for (let i = 1; i < string.length; i++) {
        let char = string.charAt(i);  
        if (char === char.toUpperCase()) {
            word += ', '
        }
        word += char
    } 
    console.log(word)
}
// solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');