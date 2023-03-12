// FIRST VAR

function addressBook(input) {
    let addressBookObj = {};
    for (const line of input) {
        let [ name, address ] = line.split(":");
        addressBookObj[name] = address;
    }

    let sortedNames = Object.keys(addressBookObj)
        .sort((nameA, nameB) => nameA.localeCompare(nameB));
    for (const name of sortedNames) {
        console.log(`${name} -> ${addressBookObj[name]}`)
    }
}

// SECOND VAR

function addressBook(arr) {
    let addressBook = {}
    for (const line of arr) {
        let [key, value] = line.split(":");
        addressBook[key] = value;
    }
    let entries = Object.entries(addressBook);
    entries.sort((a, b) => {
        let keyA = a[0];
        let keyB = b[0];
        return keyA.localeCompare(keyB);
    })

    for (const iterator of entries) {
        console.log(`${iterator} -> ${addressBook[iterator]}`)
    }
}




addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);