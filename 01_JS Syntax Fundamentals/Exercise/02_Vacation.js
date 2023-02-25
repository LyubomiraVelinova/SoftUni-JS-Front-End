function solve(countPeople, typeGroup, day) {
    let total;
    switch (typeGroup) {
        case 'Students':
            if (day === 'Friday') {
                total = countPeople * 8.45;
            } else if (day === 'Saturday') {
                total = countPeople * 9.80;
            } else if (day === 'Sunday') {
                total = countPeople * 10.46;
            }

            if (countPeople >= 30) {
                total -= total * 0.15;
            } 
            break;

        case 'Business':
            if (countPeople >= 100) {
                countPeople -= 10;
            }

            if (day === 'Friday') {
                total = countPeople * 10.90;
            } else if (day === 'Saturday') {
                total = countPeople * 15.60;
            } else if (day === 'Sunday') {
                total = countPeople * 16;
            }
            break;

        case 'Regular':
            if (day === 'Friday') {
                total = countPeople * 15;
            } else if (day === 'Saturday') {
                total = countPeople * 20;
            } else if (day === 'Sunday') {
                total = countPeople * 22.50;
            }

            if (countPeople >= 10 && countPeople <= 20) {
                total -= total * 0.05;
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}

solve(30,"Students","Sunday")