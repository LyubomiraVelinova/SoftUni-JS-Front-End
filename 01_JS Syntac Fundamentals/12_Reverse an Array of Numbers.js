function solve(n, array){
    let newArray = array.slice(0,n)
    let reverseArray = newArray.reverse()
    console.log(reverseArray.join(' '))
}

solve(3, [10, 20, 30, 40, 50])