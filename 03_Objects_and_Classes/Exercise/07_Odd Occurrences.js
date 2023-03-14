function oddOccurrences(sentence) {
    let words = sentence.split(' ');
    let wordsCaseInsensitive = words.map(w => w.toLowerCase());
    // 'Reduce()' for counting occurrences of each element in array
    let occurrences = wordsCaseInsensitive.reduce((accumulator, value) => {
        accumulator[value] = ++accumulator[value] || 1;
        return accumulator;
    }, {});
    let oddOccurrences = [];
    for (const [key, value] of Object.entries(occurrences)) {
        if (value % 2 === 1){
            oddOccurrences.push(key);
        }
    }
    console.log(oddOccurrences.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');