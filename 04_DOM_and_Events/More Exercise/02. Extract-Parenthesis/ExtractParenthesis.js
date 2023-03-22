function extract(content) {
    const textInput = document.getElementById('content');
    const text = textInput.textContent;
    let regex = /\(([^)]+)\)/g;
    let allMatches = text.match(regex);
    return allMatches.join('; ')
}