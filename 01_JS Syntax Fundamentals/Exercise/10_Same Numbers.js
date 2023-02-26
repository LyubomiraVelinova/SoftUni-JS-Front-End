function sameNumbers(number) {
    let numberToString = number.toString();
    let isFalse = false;
    let sum = 0;

    for (let i = 0; i < numberToString.length; i++) {
        if (i !== (numberToString.length - 1) && numberToString[i] === numberToString[i+1]) {
            isFalse = true
        } else if (i === (numberToString.length - 1) && numberToString[i] === numberToString[i-1]) {
            isFalse = true
        } else {
            isFalse = false
            break;
        }
    }
    for (const num of numberToString) {
        sum += Number(num)
    }
    console.log(isFalse)
    console.log(sum)
}
sameNumbers(2222222)
sameNumbers(12322)