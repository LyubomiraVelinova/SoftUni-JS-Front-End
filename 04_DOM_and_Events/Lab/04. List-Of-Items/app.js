function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');
    let newLiItem = document.createElement('li');
    newLiItem.textContent = input.value;
    
    items.appendChild(newLiItem);
    input.value = '';
}
