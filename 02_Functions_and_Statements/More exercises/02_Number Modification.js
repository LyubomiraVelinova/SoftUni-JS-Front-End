function numberModification(number) {
    let stringArr = [...String(number)];
    let numbersArr = stringArr.map(Number);
    
    while (numbersArr) {
        let digitsSum = numbersArr.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
        if (digitsSum / numbersArr.length > 5) {
            break;
        }

        numbersArr.push(9);
    }
    
    console.log(Number(numbersArr.join('')));
}

numberModification(101);
numberModification(5835);