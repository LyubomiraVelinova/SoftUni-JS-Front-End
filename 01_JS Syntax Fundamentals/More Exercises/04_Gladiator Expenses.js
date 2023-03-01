function repair(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let time = 0;
    for (let i = 2; i <= lostFightsCount ; i += 2) {
        if (i % 3 === 0) {
            totalExpenses += shieldPrice;
            time += 1
            if (time % 2 === 0) {
                totalExpenses += armorPrice;
            }
        }
        totalExpenses += helmetPrice;
    }
    for (let i = 3; i < lostFightsCount; i += 3) {
        totalExpenses += swordPrice;
        
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}

repair(7,2,3,4,5);
repair(23,12.50,21.50,40,200);