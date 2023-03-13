function solve(people) {
    personInfo = {};
    for (const person of people) {
        personInfo[person] = person.length;
    }
    for (const key in personInfo) {
        console.log(`Name: ${key} -- Personal Number: ${personInfo[key]}`)
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