// FIRST VARIATION

function solve(year) {
    let result
    if (year % 4 === 0 && year % 100 !== 0) {
        result = 'yes';
    } else if (year % 400 === 0){
        result = 'yes';
    } else {
        result = 'no';
    }
    console.log(result)
}

// SECOND VARIATION
function solve(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
    
}

solve(1984)
solve(2003)
solve(4)