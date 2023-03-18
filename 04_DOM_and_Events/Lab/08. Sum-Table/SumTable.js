function sumTable() {
    const trWithoutFirstAndLast = Array.from(document.querySelectorAll('tr:not(:first-child):not(:last-child)'));
    const lastTd = document.getElementById('sum');

    let sum = 0;
    trWithoutFirstAndLast.forEach(tr => {
        let tdValue = Array.from(tr.children)[1];
        let value = Number(tdValue.textContent);
        sum += value
    });
    lastTd.textContent = sum;
}