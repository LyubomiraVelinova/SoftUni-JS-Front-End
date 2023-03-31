function pianist(input) {
    let n = Number(input.shift());
    let container = {};
    let commandParser = {
        'Add': addPiece,
        'Remove': removePiece,
        'ChangeKey': changeKey,
    };

    for (let index = 0; index < n; index++) {
        let [piece, composer, key] = input.shift().split('|');
        container[piece] = { composer, key };
    }

    for (const line of input) {
        if (line === 'Stop') {
            break
        }
        let lineArr = line.split('|');
        let command = lineArr.shift();

        commandParser[command](...lineArr);
    }

    function addPiece(piece, composer, key) {
        if (!container.hasOwnProperty(piece)) {
            container[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    }

    function removePiece(piece) {
        if (container.hasOwnProperty(piece)) {
            delete container[piece];
            console.log(`Successfully removed ${piece}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    function changeKey(piece, newKey) {
        if (container.hasOwnProperty(piece)) {
            container[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    for (const piece in container) {
        const { key, composer } = container[piece];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)