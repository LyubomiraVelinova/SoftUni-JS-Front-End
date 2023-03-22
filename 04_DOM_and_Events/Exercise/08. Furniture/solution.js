// FIRST VAR
function solve() {
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const tbody = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createDomElements('tr', '', tbody);
      const firstColumnTd = createDomElements('td', '', tableRow);
      createDomElements('img', '', firstColumnTd, '', '', { src: img });
      const secondColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', name, secondColumnTd);
      const thirdColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', price, thirdColumnTd);
      const fourthColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', decFactor, fourthColumnTd);
      const fifthColumnTd = createDomElements('td', '', tableRow);
      createDomElements('input', '', fifthColumnTd, '', '', { type: 'checkbox' });
    }
  }

  function buyHandler() {
    const allCheckboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
    const resultTextArea = document.getElementsByTagName('textarea')[1];
    // resultTextArea.setAttribute("disabled", false);
    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;
    let count = 0;
    allCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        let paragraph = checkbox.parentElement.parentElement;
        let furniture = paragraph.children[1].children[0].textContent;
        let price = Number(paragraph.children[2].children[0].textContent);
        let decorationFactor = Number(paragraph.children[3].children[0].textContent);
        totalDecorationFactor += decorationFactor;
        totalPrice += price
        count += 1
        boughtFurniture.push(furniture);
      }
    });
    resultTextArea.value = `Bought furniture: ${boughtFurniture.join(', ')}`
    resultTextArea.value += `\n` + `Total price: ${totalPrice.toFixed(2)}`
    resultTextArea.value += `\n` + `Average decoration factor: ${totalDecorationFactor / count}`
  }

  // type: string
  // content: string
  // id: string
  // classes: array of strings
  // attributes: object
  function createDomElements(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== 'input' && type !== 'textArea') {
      htmlElement.textContent = content;
    }

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (content && type === 'textArea') {
      htmlElement.value = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}



// SECOND VAR

function solve() {
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const tbody = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createDomElements('tr', '', tbody);
      const firstColumnTd = createDomElements('td', '', tableRow);
      createDomElements('img', '', firstColumnTd, '', '', { src: img });
      const secondColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', name, secondColumnTd);
      const thirdColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', price, thirdColumnTd);
      const fourthColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', decFactor, fourthColumnTd);
      const fifthColumnTd = createDomElements('td', '', tableRow);
      createDomElements('input', '', fifthColumnTd, '', '', { type: 'checkbox' });
    }
  }

  function buyHandler() {
    const allCheckedInputs = Array.from(document.querySelectorAll(`tbody tr input:checked`))
    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    let count = 0;

    for (const input of allCheckedInputs) {
      const tableRow = input.parentElement.parentElement;
      const [firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);
      let item = secondColumn.children[0].textContent;
      boughtItems.push(item);
      let currentPrice = Number(thirdColumn.children[0].textContent);
      totalPrice += currentPrice;
      let currentDecFactor = Number(fourthColumn.children[0].textContent);
      totalDecFactor += currentDecFactor;
    }
    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value += `Average decoration factor: ${totalDecFactor / allCheckedInputs.length}`;
  }

  // type: string
  // content: string
  // id: string
  // classes: array of strings
  // attributes: object
  function createDomElements(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== 'input' && type !== 'textArea') {
      htmlElement.textContent = content;
    }

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (content && type === 'textArea') {
      htmlElement.value = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}
