window.addEventListener("load", solve);

function solve() {
  //TODO ....
}

function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {

  const htmlElement

  if (content && useInnerHtml) {
    HTMLElement.innerHTML = content;
  } else {
    if (content && type !== 'input') {
      HTMLElement.textContent = content;
    }

    if (content && type === 'input') {
      HTMLElement.value = content;
    }
  }

  if (classes && classes.length > 0) {
    HTMLElement.id = id;
  }

}
