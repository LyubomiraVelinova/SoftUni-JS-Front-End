function solve(arrayOfStrings, step) {
    let resultArray = [];
    for (let i = 0; i < arrayOfStrings.length; i += step) {
        resultArray.push(arrayOfStrings[i]);
    }
    return resultArray;
}

solve(['5', '20', '31', '4', '20'], 2)
solve(['dsa','asd', 'test', 'tset'], 2)
solve(['1', '2','3', '4', '5'], 6)