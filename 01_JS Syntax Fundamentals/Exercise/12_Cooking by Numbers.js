function cooking(number, ...array) {
    let result = Number(number)
    for (const operation of array) {
        if (operation === 'chop'){
            result /= 2;
        } else if (operation === 'dice'){
            result = Math.sqrt(result)
        } else if (operation === 'spice') {
            result ++;
        } else if (operation === 'bake'){
            result *= 3;
        } else if (operation === 'fillet'){
            result -= 0.2*result;
        } 
        console.log(result);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')