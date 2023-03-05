// FIRST VAR

function charactersInRange(firstChar, secondChar) {
    let asciiCodeFirstChar = firstChar.charCodeAt(0);
    let asciiCodeSecondChar = secondChar.charCodeAt(0);
    let smallestAsciiCode = Math.min(asciiCodeFirstChar, asciiCodeSecondChar);
    let biggestAsciiCode = Math.max(asciiCodeFirstChar, asciiCodeSecondChar);
    let result = [];

    for (let i = smallestAsciiCode + 1; i < biggestAsciiCode; i++) {
        let char = String.fromCharCode(i);
        result.push(char);
    }

    console.log(result.join(' '))
}

charactersInRange('a', 'd');
charactersInRange('#',':');
charactersInRange('C','#');