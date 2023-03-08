function convertToJSON(name, lastName, hairColor) {
    let person = {name, lastName, hairColor};
    let convertPerson = JSON.stringify(person);
    console.log(convertPerson);
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');