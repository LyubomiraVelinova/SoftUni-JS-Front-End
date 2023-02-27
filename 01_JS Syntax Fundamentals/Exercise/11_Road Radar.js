function solve(speed, area){
    MOTORWAYLIMIT = 130;
    INTERSTATELIMIT = 90;
    CITYLIMIT = 50;
    RESIDENTIALAREALIMIT = 20;
    
    let speedLimit;
    let status;

    switch(area) {
        case 'residential':
            speedLimit = RESIDENTIALAREALIMIT;
            break;
        case 'city':
            speedLimit = CITYLIMIT;
            break;
        case 'interstate':
            speedLimit = INTERSTATELIMIT;
            break;
        case 'motorway':
            speedLimit = MOTORWAYLIMIT;
            break;
    }

    if (speed > speedLimit && speed <= speedLimit + 20) {
        status = 'speeding';
    } else if (speed > speedLimit + 20 &&  speed <= speedLimit + 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        console.log(`The speed is ${(speed - speedLimit)} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');