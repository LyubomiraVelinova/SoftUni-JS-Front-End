// FIRST VARIATION

// function solve(numbers) {
//     let sortedNumbers = [];
//     numbers.sort((aNum, bNum) => (aNum - bNum));
//     while (numbers.length > 0) {
//         let firstElement = numbers.shift();
//         let secondElement = numbers.pop();
//         sortedNumbers.push(firstElement);
//         sortedNumbers.push(secondElement);
//     }
//     return sortedNumbers
// }


// SECOND VARIATION

function solve(numbers) {
    let sortedNumbers = [...numbers].sort((a, b) => (a - b));
    let step = 0;
    let result = [];
    while (sortedNumbers.length > 0) {
        if (step % 2 === 0) { //Take from beginning
            let firstElement = numbers.shift();
            result.push(firstElement)
        } else {
            let lastElement = numbers.pop();
            result.push(lastElement);
        }
        step++;
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))