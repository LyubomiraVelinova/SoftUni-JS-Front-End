function solve(input) {
    let dictionary = {};
    for (const line of input) {
        let parseToObj = JSON.parse(line);
        for (const key in parseToObj) {
            dictionary[key] = parseToObj[key];
        }
    }
    for (const key of orderedByKey(dictionary)) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }

    function orderedByKey(object) {
        let ordered = Object.keys(object)
            .sort((stringA, stringB) => stringA.localeCompare(stringB));
        return ordered;
    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);