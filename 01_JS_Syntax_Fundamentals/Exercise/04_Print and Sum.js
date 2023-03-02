function solve(start, end) {
    let nums = [];
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i
        nums.push(i)
    }
    console.log(nums.join(' '));
    console.log(`Sum: ${sum}`)
}

solve(5,10)
solve(0,26)
solve(50,60)