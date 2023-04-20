function solve(inputArray) {
    let elements = inputArray.shift().split(' ');
    let movesCounter = 0;
    for (const line of inputArray) {
        if (line === 'end' && elements.length > 0) {
            console.log(`Sorry you lose :(`);
            console.log(elements.join(' '));
            return
        }
        movesCounter++;
        if (validIndexes(line, inputArray)) {
            
            const [firstIndex, secondIndex] = line.split(' ').map((str) => Number(str));
            let firstElement = elements[firstIndex];
            let secondElement = elements[secondIndex];
            if (firstElement === secondElement) {
                let [biggestIndex, smallestIndex] = findBiggestIndex(firstIndex, secondIndex);
                elements.splice(biggestIndex, 1);
                elements.splice(smallestIndex, 1);
                console.log(`Congrats! You have found matching elements - ${firstElement}!`);
            } else {
                console.log(`Try again!`);
            }
        } else {
            let startIndex = Number(elements.length / 2);
            let newElements = [`-${movesCounter}a`, `-${movesCounter}a`];
            elements.splice(startIndex, 0, ...newElements);
            console.log(`Invalid input! Adding additional elements to the board`)
        }
        
        if (elements.length === 0) {
            console.log(`You have won in ${movesCounter} turns!`)
            return
        }
    }

    function validIndexes(sequence, array) {
        let isFirstValid = false;
        let isSecondValid = false;
        let [firstIndex, secondIndex] = sequence.split(' ').map((str) => Number(str));
        if (firstIndex >= 0 && firstIndex < array.length) {
            isFirstValid = true;
        }
        if (secondIndex >= 0 && secondIndex < array.length) {
            isSecondValid = true;
        }
        if (isFirstValid && isSecondValid && firstIndex !== secondIndex) {
            return true;
        } else {
            return false
        }
    }

    function findBiggestIndex(firstI, secondI) {
        if (firstI > secondI) {
            return [firstI, secondI];
        }
        return [secondI, firstI];
    }


}

solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]

)    