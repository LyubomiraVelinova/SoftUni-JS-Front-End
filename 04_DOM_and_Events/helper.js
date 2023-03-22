// CREATE DOM ELEMENT

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