function solve(input) {
    let result
    let inputType = typeof(input)
    if (inputType === 'number') {
        result = `${(Math.PI * (input ** 2 )).toFixed(2)}`;
    } else {
        result = `We can not calculate the circle area, because we receive a ${inputType}.`
    }
    console.log(result)
}

solve(5)