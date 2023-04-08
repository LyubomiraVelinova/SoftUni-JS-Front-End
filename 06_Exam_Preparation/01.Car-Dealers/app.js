window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price'),
  }
  const otherDOMSelectors = {
    publishBtn: document.getElementById('publish'),
    tableBody: document.getElementById('table-body'),
    soldCars: document.getElementById('cars-list'),
    profit: document.getElementById('profit'),
  }

  otherDOMSelectors.publishBtn.addEventListener('click', publishInputsHandler);

  let inputsContainer = {};
  function publishInputsHandler(event) {
    if (event) {
      event.preventDefault();
    }
    inputValidation();
    for (const key in inputDOMSelectors) {
      inputsContainer[key] = inputDOMSelectors[key].value;
    }
    const row = createElement('tr', otherDOMSelectors.tableBody, null, ['row']);
    createElement('td', row, inputsContainer.make);
    createElement('td', row, inputsContainer.model);
    createElement('td', row, inputsContainer.year);
    createElement('td', row, inputsContainer.fuel);
    createElement('td', row, inputsContainer.originalCost);
    createElement('td', row, inputsContainer.sellingPrice);
    const buttonContainer = createElement('td', row);
    const editBtn = createElement('button', buttonContainer, 'Edit', ['action-btn', 'edit']);
    editBtn.addEventListener('click', editInputsHandler);
    const sellBtn = createElement('button', buttonContainer, 'Sell', ['action-btn', 'sell']);
    sellBtn.addEventListener('click', confirmationHandler);

    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = '';
    }
  }

  function editInputsHandler(event) {
    const currentRow = event.currentTarget.parentNode.parentNode;
    const [currentMake, currentModel, currentYear, currentFuel, currentCost, currentSellingPrice, _btn] = Array.from(currentRow.children);
    // console.log(Array.from(currentRow.children))

    currentRow.remove()

    inputDOMSelectors['make'].value = currentMake.textContent;
    inputDOMSelectors['model'].value = currentModel.textContent;
    inputDOMSelectors['year'].value = currentYear.textContent;
    inputDOMSelectors['fuel'].value = currentFuel.textContent;
    inputDOMSelectors['originalCost'].value = currentCost.textContent;
    inputDOMSelectors['sellingPrice'].value = currentSellingPrice.textContent;

    otherDOMSelectors.publishBtn.addEventListener('click', publishInputsHandler);
  }

  let total = 0;
  function confirmationHandler(event) {
    currentRow = event.currentTarget.parentNode.parentNode;
    const [currentMake, currentModel, currentYear, currentFuel, currentCost, currentSellingPrice, _btn] = Array.from(currentRow.children);
    currentRow.remove();

    const profit = Number(currentSellingPrice.textContent) - Number(currentCost.textContent);
    const li = createElement('li', otherDOMSelectors.soldCars, null, ['each-list']);
    createElement('span', li, `${currentMake.textContent} ${currentModel.textContent}`);
    createElement('span', li, currentYear.textContent);
    createElement('span', li, profit);

    total += profit;
    otherDOMSelectors.profit.textContent = total;
  }

  function inputValidation() {
    const allFieldsHaveValue = Object.values(inputDOMSelectors)
      .every((input) => input.value !== '');
    const originalCostValue = Number(inputDOMSelectors.originalCost.value);
    const sellingPriceValue = Number(inputDOMSelectors.sellingPrice.value);

    if (!allFieldsHaveValue || originalCostValue >= sellingPriceValue) {
      console.log('Invalid field');
      return;
    }
  }
  function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {

    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== 'input' && type !== 'textArea') {
        htmlElement.textContent = content;
      }

      if (content && (type === 'input' || type === 'textArea')) {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    // { src: 'link', href: 'http'}
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
