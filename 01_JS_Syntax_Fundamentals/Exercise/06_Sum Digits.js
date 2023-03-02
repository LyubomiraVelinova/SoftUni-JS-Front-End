// FIRST VARIATION

// function solve (num) {
//     let sum = 0;
//     let numberAsString = num.toString();

//     for (const digitAsString of numberAsString) {
//         let digit = Number(digitAsString);
//         sum += digit;
//     }
//     console.log(sum);
// }

// SECOND VARIATION
function solve (num) {
    let sum = 0;
    while (num > 0){
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.trunc(num / 10);
    } 
    console.log(sum); 
}

solve(245678);