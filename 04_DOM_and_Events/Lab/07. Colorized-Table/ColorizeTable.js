function colorize() {
    const trInput = Array.from(document.querySelectorAll('body > table > tbody > tr:nth-child(even)'));
    console.log(trInput)
    for (const tr of trInput) {
        tr.style.backgroundColor = 'teal'
    }
}