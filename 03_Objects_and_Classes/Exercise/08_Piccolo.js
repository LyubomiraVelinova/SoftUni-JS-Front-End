function piccolo(input) {
    let carRecorder = {}
    input.forEach(line => {
        let [direction, carNumber] = line.split(', ');
        if (direction === 'IN') {
            carRecorder[carNumber] = direction;
        } else if (direction === 'OUT') {
            delete carRecorder[carNumber];
        }
    });
    let orderedByCarNumber = Object.keys(carRecorder)
        .sort((keyA, keyB) => keyA.localeCompare(keyB));
    if (Object.keys(carRecorder).length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        orderedByCarNumber.forEach(car => console.log(car));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);