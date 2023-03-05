// FIRST VAR

// function oddEvenSum (number) {
//     let numArr = String(number).split('')
//     let stringToNum = x => Number(x);
//     let evenSum = 0;
//     let oddSum = 0;

//     numArr.forEach(element => {
//         if (stringToNum(element) % 2 === 0) {
//             evenSum += stringToNum(element);
//         } else {
//             oddSum += stringToNum(element);
//         }
//     });

//     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
// }

// SECOND VAR

function oddEvenSum (number) {
   let numToString = [...number.toString()];
   let numArr = numToString.map(Number);
   let evenSum = 0
   let oddSum = 0
   
   numArr.forEach(num => {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
   });

   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);