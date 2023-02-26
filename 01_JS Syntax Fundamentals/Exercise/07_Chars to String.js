// FIRST VARIATION

function charsToString(a, b, c) {
    let string = '';
    string += a;
    string += b;
    string += c;
    console.log(string)
}

// SECOND VARIATION

function charsToString(a, b, c) {
    let string = a + b + c;
    console.log(string)
}

// THIRD VARIATION

function charsToString(a, b, c) {
    let string = [a, b, c];
    console.log(string.join(''))
}

charsToString('a', 'b', 'c')