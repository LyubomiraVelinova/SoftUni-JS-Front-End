// FIRST VAR

function deleteByEmail() {
    const input = document.querySelector('input[name = "email"');
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const result = document.getElementById('result');
    let emailValue = input.value;
    let foundElement = evenTds.find((td) => td.textContent === emailValue);
    if (foundElement) {
        foundElement.parentElement.remove();
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found';
    }
}

// SECOND VAR

function deleteByEmail() {
    const emailsInput = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const input = document.querySelector('body > label > input[type=text]');
    const result = document.querySelector('#result')
    for (const email of emailsInput) {
        if (email.textContent === input.value){
            email.parentElement.remove();
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found';
        }
    }
}
