// FIRST VAR

function phoneBook(arr) {
    let phoneBookObj = {};
    arr.forEach(element => {
        let [personName, personPhone] = element.split(' ');
        phoneBookObj[personName] = personPhone;
    });

    for (const key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

// SECOND VAR

function phoneBook(arr) {
    let phoneBookObj = {};
    for (const line of arr) {
        let [ name, phoneNumber] = line.split(' ');
        phoneBookObj[name] = phoneNumber;   
    }

    for (const key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)