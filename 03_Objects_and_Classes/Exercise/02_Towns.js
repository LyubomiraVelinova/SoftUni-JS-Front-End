// FIRST VAR

function towns(input) {
    let output = {};
    for (const tableRow of input) {
        let [town, latitude, longitude] = tableRow.split(' | ');
        output['town'] = town;
        output['latitude'] = Number(latitude).toFixed(2);
        output['longitude'] = Number(longitude).toFixed(2);
        console.log(output);
    }
}

// SECOND VAR

function towns(input) {
    let newInput = input
        .map((line) => line.split(' | '))
        .map(([town, latitude, longitude]) => ({town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)}))
        .forEach((line) => console.log(line));
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

towns(['Plovdiv | 136.45 | 812.575']);
