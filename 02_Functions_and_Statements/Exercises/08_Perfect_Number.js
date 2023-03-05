function isPerfect(number) {
    let divisors = [];

    for (let currentNum = 1; currentNum < number; currentNum++) {
        if (number % currentNum === 0) {
            divisors.push(currentNum);
        }
    }
    
    let divisorsSum = divisors.reduce((previousVal, currentVal) => previousVal + currentVal, 0);

    if (number === divisorsSum) {
        console.log('We have a perfect number!')
    } else {
        console.log(`It's not so perfect.`)
    }
}

isPerfect(6);
isPerfect(28);
isPerfect(1236498);