// FIRST OPTION - !Not all the tests passed!

// function sameNumbers(number) {
//     let numberToString = number.toString();
//     let isFalse = false;
//     let sum = 0;

//     for (let i = 0; i < numberToString.length; i++) {
//         if (i !== (numberToString.length - 1) && numberToString[i] === numberToString[i+1]) {
//             isFalse = true
//         } else if (i === (numberToString.length - 1) && numberToString[i] === numberToString[i-1]) {
//             isFalse = true
//         } else {
//             isFalse = false
//             break;
//         }
//     }
//     for (const num of numberToString) {
//         sum += Number(num)
//     }
//     console.log(isFalse)
//     console.log(sum)
// }

// SECOND OPTION

function sameNumbers(number) {
    let numberToString = number.toString();
    let numberArr = numberToString.split('');
    // Are all the digits equal:
    console.log(numberArr.every(val => val === numberArr[0]));

    // Sum all the digits in the number
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(sum)
}


sameNumbers(2222222)
sameNumbers(12322)