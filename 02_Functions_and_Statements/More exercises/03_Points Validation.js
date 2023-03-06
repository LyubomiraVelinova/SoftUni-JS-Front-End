function pointsValidation(numbers) {
    let [x1, y1, x2, y2] = [...numbers];
    console.log(isDistanceValid(x1, y1, 0, 0));
    console.log(isDistanceValid(x2, y2, 0, 0));
    console.log(isDistanceValid(x1, y1, x2, y2));

    function isDistanceValid(x1, y1, x2, y2) {
        let status = 'invalid';
        let isDistanceInteger = Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
        if (isDistanceInteger) {
            status = 'valid';
        }
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`
    }
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);