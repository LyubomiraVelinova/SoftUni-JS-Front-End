// function solve(string, startIndex, count) {
//     let result;
//     result = string.slice(startIndex, count + 1);
//     console.log(result);
// }

function solve(string, startIndex, count) {
    let result = '';
    for (let i = startIndex; i <= count; i++){
        result += string[i]
    }
    console.log(result);
}

solve('ASentence', 1, 8)
solve('SkipWord', 4, 7)