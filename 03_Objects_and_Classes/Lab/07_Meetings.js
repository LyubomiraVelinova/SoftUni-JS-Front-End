function meetings(input) {
    let meetingsObj = {};
    for (const line of input) {
        let [ day , name] = line.split(' ');
        if (meetingsObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const key in meetingsObj) {
        console.log(`${key} -> ${meetingsObj[key]}`);
    }
}

meetings(['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim']);
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);