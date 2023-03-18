function extractText() {
    const liElements = Array.from(document.querySelectorAll('#items > li'));
    const textArea = document.getElementById('result');
    liElements
        .forEach((li) => {
            textArea.textContent += li.textContent + '\n';
        })
}

// function extractText() {
//     const liItems = Array.from(document.querySelectorAll( ul > li));
//     const textArea = document.getElementById('result');
//     for (const item of liItems) {
//         textArea.textContent += item.textContent + '\n';
//     }
// }