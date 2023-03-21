function solve() {
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const tbody = document.getElementsByTagName('tbody')[0];

  generateBtn.addEventListener('click', generateHandler);
  // buyBtn.addEventListener('click', checkedFurnitureHandler);

  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const {img, name, price, decFactor} of data) {
      const tableRow = createDomElements('tr', '', tbody);
      const firstColumnTd = createDomElements('td', '', tableRow);
      createDomElements('img', '', firstColumnTd, '', '', {src: img});
      const secondColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', name, secondColumnTd);
      const thirdColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', price, thirdColumnTd);
      const fourthColumnTd = createDomElements('td', '', tableRow);
      createDomElements('p', decFactor, fourthColumnTd);
      const fifthColumnTd = createDomElements('td', '', tableRow);
      createDomElements('input', '', fifthColumnTd, '', '', {type: 'checkbox'});
    }
  }
  
}

// type: string
// content: string
// id: string
// classes: array of strings
// attributes: object
function createDomElements(type, content, parentNode, id, classes, attributes) {
  const htmlElement = document.createElement(type);

  if (content && type !== 'input' && type !== 'textArea'){
    htmlElement.textContent = content;
  }

  if (content && type === 'input'){
    htmlElement.value = content;
  }

  if (content && type === 'textArea'){
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