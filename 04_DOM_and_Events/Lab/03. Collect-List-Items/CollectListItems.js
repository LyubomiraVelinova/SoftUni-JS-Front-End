function extractText() {
    const liElements = Array.from(document.querySelectorAll('#items > li'));
    const textArea = document.getElementById('result');
    liElements
        .forEach((li) => {
            textArea.textContent += li.textContent + '\n';
        })
}