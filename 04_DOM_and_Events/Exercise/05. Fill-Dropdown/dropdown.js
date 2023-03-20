function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const select = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = textInput.value;
    option.value = valueInput.value;

    select.appendChild(option);
    textInput.value = '';
    valueInput.value = '';
}