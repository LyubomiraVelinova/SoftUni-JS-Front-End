function editElement(header, match, replacer) {
    const text = header.textContent;
    const output = text.replace(new RegExp(match, 'g'), replacer);
    header.textContent = output;
}