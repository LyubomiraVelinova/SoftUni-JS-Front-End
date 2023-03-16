function fightSchedule(input) {
  
let [allFlights, newStatuses, flightStatus] = [...input];
let allFlightsObj = convertArrayToObj(allFlights);
let newStatusesObj = convertArrayToObj(newStatuses);
flightStatus = flightStatus.join(' ');

let total = [];
let mixed = {};

if (flightStatus === 'Ready to fly') {
    for (const key in newStatusesObj) {
        delete allFlightsObj[key];
    }
    for (const key in allFlightsObj) {
        mixed.Destination = allFlightsObj[key].join(' ');
        mixed.Status = flightStatus;
        total.push(mixed);
        mixed = {};
    }
} else {
    for (const key in allFlightsObj) {
        for (const k in newStatusesObj) {
            let currentStatus = newStatusesObj[k].join(' ');
            if (key === k && currentStatus === flightStatus) {
                mixed.Destination = allFlightsObj[key].join(' ');
                mixed.Status = flightStatus;
                total.push(mixed);
                mixed = {};
            }
        }
    }
}

function convertArrayToObj(array) {
    array = array.map(line => line.split(' '));
    let obj = {};
    for (const element of array) {
        let [key, ...value] = element;
        obj[key] = value;
    }
    return obj
}

total.forEach(obj => console.log(obj));
}

fightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
);

// let input = [['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK330 Cancelled'],
// ['Ready to fly']
// ]

