function catalogue(input) {
    let productsArr = input
        .sort((stringA, stringB) => stringA.localeCompare(stringB))
        .map((line) => line.split(' : '))
    let productsObj = productsArr
        .reduce((data, product) => {
                data[product[0]] = Number(product[1]);
                return data;
            }, {})
    
    let letter = '';
    let dictionary = {};
    let products = [];
    for (const line of productsArr) {
        let product = line[0];
        let currentLetter = product[0];
        if (letter !== currentLetter && productsArr.indexOf(line) !== 0 ) {
            dictionary[letter] = products
            products = [];
        }
        letter = currentLetter;
        products.push(product);
        if (productsArr.indexOf(line) === productsArr.length - 1) {
            dictionary[letter] = products;
        }
    }
    for (const [key, value] of Object.entries(dictionary)) {
        console.log(key);
        value.map((p) => console.log(`  ${p}: ${productsObj[p]}`))
    }
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