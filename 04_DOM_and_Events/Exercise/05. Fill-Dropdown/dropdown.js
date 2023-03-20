function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const select = document.getElementById('menu');

    let option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;

    select.appendChild(option);
    text.value = '';
    value.value = '';
}