function factorialDivision(firstNum, secondNum) {

    function factorial(number) {
        if (number === 1) {
            return number;
        }
        return number * factorial(number - 1);
    }

    return (factorial(firstNum) / factorial(secondNum)).toFixed(2)
}



console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));