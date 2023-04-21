function solve(inputArray) {
    const commandParser = {
        'Retake': retakeHandler,
        'Trouble': troubleHandler,
        'Rage': rageHandler,
        'Miracle': miracleHandler,
    }
    let horsesPositions = inputArray.shift().split('|');
    for (const line of inputArray) {
        if (line === 'Finish') {
            let winner = horsesPositions[horsesPositions.length - 1];
            console.log(horsesPositions.join('->'));
            console.log(`The winner is: ${winner}`);
            return
        }
        let [command, ...others] = line.split(' ');
        commandParser[command](...others);
    }

    function retakeHandler(overtakingHorse, overtakenHorse) {
        let overtakingHorseIndex = horsesPositions.indexOf(overtakingHorse);
        let overtakenHorseIndex = horsesPositions.indexOf(overtakenHorse);
        if (overtakingHorseIndex < overtakenHorseIndex) {
            [horsesPositions[overtakingHorseIndex], horsesPositions[overtakenHorseIndex]] = [horsesPositions[overtakenHorseIndex], horsesPositions[overtakingHorseIndex]]
            console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
        }
    }

    function troubleHandler(horseName) {
        let horseIndex = horsesPositions.indexOf(horseName);
        if (horseIndex > 0) {
            [horsesPositions[horseIndex - 1], horsesPositions[horseIndex]] = [horsesPositions[horseIndex], horsesPositions[horseIndex - 1]];
            console.log(`Trouble for ${horseName} - drops one position.`);
        }
    }

    function rageHandler(horseName) {
        let horseIndex = horsesPositions.indexOf(horseName);
        // CHECK IT
        if (horseIndex > horsesPositions.length - 3 && horseIndex <= horsesPositions.length - 1) {
            horsesPositions.splice(horseIndex, 1);
            horsesPositions.push(horseName);
            console.log(`${horseName} rages 2 positions ahead.`)
        } else if (horseIndex <= horsesPositions.length - 3) {
            horsesPositions.splice(horseIndex, 1);
            horsesPositions.splice(horseIndex + 2, 0, horseName);
            console.log(`${horseName} rages 2 positions ahead.`)
        }
    }

    function miracleHandler() {
        let lastHorse = horsesPositions.shift();
        horsesPositions.push(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`)
    }
}

// solve(['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish'
// ])

solve(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']
)

// solve(['Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'])
