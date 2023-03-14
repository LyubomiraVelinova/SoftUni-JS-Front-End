// FIRST VAR

// function solve(people) {
//     let personInfo = {};
//     for (const person of people) {
//         personInfo[person] = person.length;
//     }
//     for (const key in personInfo) {
//         console.log(`Name: ${key} -- Personal Number: ${personInfo[key]}`)
//     }
// }

// SECOND VAR

function solve(people) {
    let employees = people.reduce((data, employee) => {
        data[employee] = employee.length;
        return data;
    }, {});

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);