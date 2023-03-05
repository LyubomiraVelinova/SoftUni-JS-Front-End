// FIRST VAR

function matrix(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += n + ' '
        }
        console.log(row)
    }
}

// SECOND VAR

function matrix(n) {
    let matrixArr = new Array(n).fill(new Array(n).fill(n));
    matrixArr.forEach(row => console.log(row.join(' ')));
}

// THIRD VAR

(n) => new Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(' ')));

matrix(3);
matrix(7);
matrix(2);