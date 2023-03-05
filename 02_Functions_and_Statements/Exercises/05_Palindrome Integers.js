// FIRST VAR

function palindrome(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;
    return numbers
        .map(isPalindrome)
        .join('\n');
}

// FIRST VAR

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