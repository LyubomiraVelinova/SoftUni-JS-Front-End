function toggle() {
    const text = document.getElementById('extra');
    const button = Array.from(document.getElementsByClassName('button'))[0];

    if (text.style.display === 'none') {
        text.style.display = 'block';
        button.textContent = 'Less';
    } else {
        text.style.display = 'none';
        button.textContent = 'More';
    }
}