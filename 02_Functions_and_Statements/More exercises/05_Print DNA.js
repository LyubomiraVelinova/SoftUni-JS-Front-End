function printDNA(number) {
    let stringDNA = '*'.repeat(6);
    let sequence = 'ATCGTTAGGG';
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < sequence.length; j += 2) {
            stringDNA[2] = sequence[j]
            
        }
    }
    console.log(stringDNA)
}

printDNA(4);