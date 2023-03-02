function solve(array) {
    let count = 0;
    let username = array[0];
    let passwords = array.slice(1);
    passwords.forEach(element => {
        count += 1
        if (username === stringReverse(element) && count <= 4) {
            console.log(`User ${username} logged in.`);
        } else if (username !== stringReverse(element) && count < 4) {
            console.log(`Incorrect password. Try again.`)
        } else if (username !== stringReverse(element) && count === 4) {
            console.log(`User ${username} blocked!`)
        }
    });

    
    function stringReverse(string) {
        let stringArr = string.split('');
        let reversedArr = stringArr.reverse();
        let reversedString = reversedArr.join('')
        return reversedString
    }
}


solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);