function listOfNames(names) {
    // Copy the array
    return [...names]
        .sort((aName, bName) => aName.localeCompare(bName))
        .map((name, index) => `${index + 1}.${name}`)
        .join('\n');
}
    
// SECOND VARIATION

// function listOfNames(names) {       
//     names.sort();
//     let count = 0;
//     names.forEach(name => {
//         count ++
//         console.log(`${count}.${name}`)
//     });
// }

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]))