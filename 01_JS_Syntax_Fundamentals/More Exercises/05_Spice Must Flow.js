function solve(startingYield) {
    let days = 0;
    let leavingSpices = 0;
    while (startingYield >= 100) {
        leavingSpices += (startingYield - 26);
        startingYield -= 10;
        days += 1;
    }
    leavingSpices -= 26
    if (leavingSpices <= 0) {
        leavingSpices = 0;
    }
    console.log(days);
    console.log(leavingSpices);
}

solve(111);
solve(450);