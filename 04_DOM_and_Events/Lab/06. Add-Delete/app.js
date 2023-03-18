function addItem() {
    const items = document.getElementById('items');
    const input = document.getElementById('newItemText');
    let newLiItem = document.createElement('li');
    let newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', '#')
    newLiItem.textContent = input.value;
    newAnchor.textContent = '[Delete]';

    newLiItem.appendChild(newAnchor);
    items.appendChild(newLiItem);

    newAnchor.addEventListener('click', function(e){
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
        // const anchor = e.currentTarget;
        // anchor.parentElement.remove();
    });
    // a.href = "#";
    input.value = '';
}
