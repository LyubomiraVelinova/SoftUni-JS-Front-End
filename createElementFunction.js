function createElement(type, parent, classes, content, id, attributes, isInnerHtml) {
    const htmlElement = document.createElement(type);

    if (content && isInnerHtml) {
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
    if (parent) {
        parent.appendChild(htmlElement);
    }

    return htmlElement;
}