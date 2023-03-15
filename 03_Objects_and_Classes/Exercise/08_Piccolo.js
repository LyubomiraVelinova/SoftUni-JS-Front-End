// FIRST VAR

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

// SECOND VAR

function piccolo(input) {
    let carNumbers = [];

    for (const line of input) {
        let [direction, carNum] = line.split(', ');
        if (direction === 'IN' && !carNumbers.includes(carNum)) {
            carNumbers.push(carNum);
        } else if (direction === 'OUT' && carNumbers.includes(carNum)) {
            let index = carNumbers.indexOf(carNum);
            carNumbers.splice(index, 1);
        }
    }

    if (carNumbers.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let sortedNumbers = carNumbers.sort((carNumA, carNumB) => carNumA.localeCompare(carNumB));
        sortedNumbers.forEach(car => console.log(car));
    }
}

// THIRD VAR - set()

function piccolo(input) {
    let carNumbers = [];

    for (const line of input) {
        let [direction, carNum] = line.split(', ');
        if (direction === 'IN' ) {
            carNumbers.push(carNum);
        } else if (direction === 'OUT') {
            let index = carNumbers.indexOf(carNum);
            carNumbers.splice(index, 1);
        }
    }
    let uniqueElements = new Set(carNumbers);

    if (uniqueElements.size === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let sortedNumbers = [...uniqueElements.keys()].sort((carNumA, carNumB) => carNumA.localeCompare(carNumB));
        sortedNumbers.forEach(car => console.log(car));
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