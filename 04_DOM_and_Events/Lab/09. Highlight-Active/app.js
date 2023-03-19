function focused() {
    const allInputs = Array.from(document.getElementsByTagName('input'));
    allInputs.forEach(input => {
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
    });

    function handleFocus(event) {
        const currentInput = event.target;
        const currentDiv = currentInput.parentElement;
        currentDiv.classList.add('focused');
    }

    function handleBlur(event) {
        const currentInput = event.target;
        const currentDiv = currentInput.parentElement;
        if (currentDiv.classList.contains('focused')) {
            currentDiv.classList.remove('focused');
        }
        // currentDiv.classList.remove('focused');
    }
}