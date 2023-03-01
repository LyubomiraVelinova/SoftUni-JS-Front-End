// function palindrome(integers) {
//     let isPalindrome = false
//     let result = [];

//     integers.forEach(num => {
//         for (let i = 0; i < num.length / 2; i++) {
//             if (num[i] === num[num.length - 1 - i]) {
//                 isPalindrome = true;
//             } else {
//                 isPalindrome = false;
//             }
//         }
//         result.push(isPalindrome);
//     });
    
//     console.log(result.join('\n'))
// }

function palindrome(integers) {
        integers.forEach(num => {
            let numToString = String(num).split('');
            let reverseNum = Number(numToString.reverse().join(''));
            if (reverseNum === num) {
                console.log('true');
            } else {
                console.log('false');
            }
        });
}

palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);