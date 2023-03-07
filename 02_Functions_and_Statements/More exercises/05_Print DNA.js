// function printDNA(number) {
//     let stringDNA = '*'.repeat(6);
//     let sequence = 'ATCGTTAGGG';
//     for (let i = 0; i < number; i++) {
    
//         let currentLetters = sequence.substring(0, 2);
//         sequence = sequence.substring(2) + currentLetters;

//         console.log(currentLetters);
//         console.log(sequence);
            
//     }
//     console.log(stringDNA)
// }

function printDNA(number) {
    let stringDNA = ('*'.repeat(6)).split('');
    let sequence = 'ATCGTTAGGG'.split('');
    for (let i = 0; i < number; i++) {
    
        let currentLetterLeft = sequence.shift();
        sequence.push(currentLetterLeft);
        let currentLetterRight = sequence.shift();
        sequence.push(currentLetterRight);
        let n = 0;
        for (let j = 2; j >= 0; j--) {
            stringDNA[2 - n] = currentLetterLeft;
            stringDNA[3 + n] = currentLetterRight;
            
            if (n === 2) {
                n = 0;
            }
            n += 1
            console.log(stringDNA.join(''));
        } 
    }
}

printDNA(4);