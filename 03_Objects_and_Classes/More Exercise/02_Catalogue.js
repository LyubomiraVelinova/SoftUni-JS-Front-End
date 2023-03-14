function catalogue(input) {
    let groups = {};
    input.sort((stringA, stringB) => {
        return stringA.localeCompare(stringB);
    });
    
    let letter = ''
    let currentArr = []
    input.forEach(line => {
        let currentLetter = line[0];
        if (letter !== currentLetter) {
            letter = currentLetter;
            currentArr = []
        }
        currentArr.push(line);
        groups[letter] = currentArr;
    });

    for (const [key, value] of Object.entries(groups)) {
        console.log(key);
        value.forEach(el => console.log(`  ${el}`))
    }

    // let result = productsArr.reduce((data, product) => {
    //     data[product[0]] = product[1];
    //     return data;
    // }, {})

    // let groups = {};
    // for (const [key,value] of Object.entries(result)) {
    //     let keyFirstLetter = key[0];
    //     groups[keyFirstLetter] = [].push([key, value]);

    // }
    // console.log(groups)
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);