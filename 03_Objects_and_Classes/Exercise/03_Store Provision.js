// FIRST VAR

// function storeProvision(storeStock, productsForDelivery) {
//     let products = {};
//     for (let i = 0; i < storeStock.length - 1; i += 2) {
//         let productName = storeStock[i];
//         let productQuantity = storeStock[i + 1];
//         products[productName] = Number(productQuantity);
//     }
//     for (let i = 0; i < productsForDelivery.length - 1; i += 2) {
//         let deliveredProductName = productsForDelivery[i];
//         let deliveredProductQuantity = productsForDelivery[i + 1];
//         if (products.hasOwnProperty(deliveredProductName)) {
//             products[deliveredProductName] += Number(deliveredProductQuantity);
//         } else {
//             products[deliveredProductName] = Number(deliveredProductQuantity);
//         }
//     }
//     for (const key in products) {
//         console.log(`${key} -> ${products[key]}`)
//     }
// }

// SECOND VAR

function storeProvision(stock, orderedProducts) {
    let combined = [...stock,...orderedProducts];
    let store = {};

    for (let index = 0; index < combined.length; index++) {
        let prop = combined[index];
        if (index % 2 === 0) {
            if (!store.hasOwnProperty(prop)) {
                store[prop] = 0
            }
        } else {
            let value = Number(prop);
            let previousProp = combined[index - 1];
            store[previousProp] += value;
        }
    }
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);