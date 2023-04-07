function createElement(type, parentNode, classes, content, id, attributes, useInnerHtml) {

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