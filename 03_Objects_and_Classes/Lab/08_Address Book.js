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