function addAndSubtract(firstNum, secondNum, thirdNum) {
    const sum = (a, b) => a + b;
    const subtract = (a,b) => a - b;
    return subtract(sum(firstNum, secondNum), thirdNum);
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));