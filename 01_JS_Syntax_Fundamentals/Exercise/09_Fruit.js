function fruit(fruitType, fruitWeightGrams, pricePerKilogram) {
    let fruitWeightKg = fruitWeightGrams / 1000
    let money = pricePerKilogram * fruitWeightKg

    console.log(`I need $${money.toFixed(2)} to buy ${fruitWeightKg.toFixed(2)} kilograms ${fruitType}.`)
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)