function wordsTracker(input) {
    let output = {};
    let searchedWords = input.shift().split(' ');
    searchedWords.forEach(word => {
        let foundWords = input.filter(el => el === word);
        output[word] = foundWords.length
    });
    // Sorting by count in descending order
    let sortedOutput = Object.entries(output)
        .sort((aCount, bCount) => bCount[1] - aCount[1]);
    sortedOutput.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);