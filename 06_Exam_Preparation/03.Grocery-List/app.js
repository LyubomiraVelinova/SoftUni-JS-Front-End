const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
const addBtn = document.getElementById('add-product');
const updateProductBtn = document.getElementById('update-product');
const loadBtn = document.getElementById('load-product');
const tbody = document.getElementById('tbody');

const inputDOMSelector = {
    nameInput: document.getElementById('product'),
    countInput: document.getElementById('count'),
    priceInput: document.getElementById('price'),
}

addBtn.addEventListener('click', addProductHandler)
// updateBtn.addEventListener('click', )
loadBtn.addEventListener('click', loadProductsHandler);

async function loadProductsHandler(event) {
    if (event) {
        event.preventDefault();
    }
    tbody.innerHTML = '';
    try {
        const response = await fetch(BASE_URL);
        const products = await response.json();
        for (const { product, count, price, _id } of Object.values(products)) {
            const tr = createElement('tr', tbody);
            tr.setAttribute('id', _id);
            createElement('td', tr, product, ['name']);
            createElement('td', tr, count, ['count-product']);
            createElement('td', tr, price, ['product-price']);
            const btnTd = createElement('td', tr, null, ['btn']);
            const updateBtn = createElement('button', btnTd, 'Update', ['update']);
            const deleteBtn = createElement('button', btnTd, 'Delete', ['delete']);
            // tr.innerHTML = `
            //     <td class="name">${product}</td>
            //     <td class="count-product">${count}</td>
            //     <td class="product-price">${price}</td>
            //     <td class="btn">
            //         <button class="update">Update</button>
            //         <button class="delete">Delete</button>
            //     </td>
            // `
            // tbody.appendChild(tr);
            deleteBtn.addEventListener('click', deleteItemHandler);
            updateBtn.addEventListener('click', updateItemHandler);
        }

    } catch (err) {
    }
}

function addProductHandler(event) {
    const product = inputDOMSelector.nameInput.value;
    const count = inputDOMSelector.countInput.value;
    const price = inputDOMSelector.priceInput.value;

    const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({ product, count, price })
    }
    fetch(BASE_URL, httpHeaders)
    loadProductsHandler(event)
    // NOT WORKING
    // .then(() => loadProductsHandler())
    // .catch((err) => console.error(err))
}

function deleteItemHandler(event) {
    const currentTr = event.currentTarget.parentNode.parentNode;
    const currentId = currentTr.id;
    const url = `${BASE_URL}${currentId}`
    const httpHeaders = {
        method: 'DELETE',
    }
    fetch(url, httpHeaders)
        .then(() => loadProductsHandler())
        .catch((err) => console.error(err))
}

function updateItemHandler(event) {
    const currentTr = event.currentTarget.parentNode.parentNode;
    const currentId = currentTr.id;
    const [product, count, price] = Array.from(currentTr.children);
    inputDOMSelector.nameInput.value = product.textContent;
    inputDOMSelector.countInput.value = count.textContent;
    inputDOMSelector.priceInput.value = price.textContent;
    updateProductBtn.disabled = false;
    addBtn.disabled = true;

    updateProductBtn.addEventListener('click', addUpdatedProductHandler);

    function addUpdatedProductHandler() {
        const newProduct = inputDOMSelector.nameInput.value;
        const newCount = inputDOMSelector.countInput.value;
        const newPrice = inputDOMSelector.priceInput.value;

        const url = `${BASE_URL}${currentId}`
        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({
                product: newProduct,
                count: newCount,
                price: newPrice
            })
        }
        fetch(url, httpHeaders)
            .then(() => loadProductsHandler())
            .catch((err) => console.error(err))
        Object.values(inputDOMSelector)
            .forEach((input) => input.value = '')
    }

}

function createElement(type, parentNode, content, classes) {
    const htmlElement = document.createElement(type);
    if (content && type !== 'input' && type !== 'textArea') {
        htmlElement.textContent = content;
    }

    if (content && (type === 'input' || type === 'textArea')) {
        htmlElement.value = content;
    }

    if (classes && classes.length > 0) {
        htmlElement.classList.add(...classes);
    }

    if (parentNode) {
        parentNode.appendChild(htmlElement);
    }

    return htmlElement;
}
