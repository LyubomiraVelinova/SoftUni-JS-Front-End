window.addEventListener('load', solve);

function solve() {
    // 1.Create selectors
    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        date: document.getElementById('from-date'),
        days: document.getElementById('days-count'),
    }

    const otherDOMSelectors = {
        nextStepBtn: document.getElementById('next-btn'),
        ul: document.querySelector('#info-ticket > div > div > ul'),
        confirmTicketUl: document.querySelector('#confirm-ticket-section > div > div > ul'),
        mainDiv: document.getElementById('main'),
        body: document.getElementById('body'),
    }
    let inputsContainer = {};
    // 2.Attach Еvents
    otherDOMSelectors.nextStepBtn.addEventListener('click', infoHandler);

    function infoHandler(event) {
        event.preventDefault();

        const allInputsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!allInputsAreValid) {
            console.log('There is invalid input');
            return;
        }
        for (const key in inputDOMSelectors) {
            inputsContainer[key] = inputDOMSelectors[key].value;
        }

        const li = createNewElement('li', ['ticket'], otherDOMSelectors.ul);
        const article = createNewElement('article', null, li);
        createNewElement('h3', null, article, `Name: ${inputsContainer.firstName} ${inputsContainer.lastName}`);
        createNewElement('p', null, article, `From date: ${inputsContainer.date}`);
        createNewElement('p', null, article, `For: ${inputsContainer.days} days`);
        createNewElement('p', null, article, `For: ${inputsContainer.peopleCount} people`);
        const editBtn = createNewElement('button', ['edit-btn'], li, 'Edit');
        editBtn.addEventListener('click', editInfoHandler);
        const continueBtn = createNewElement('button', ['continue-btn'], li, 'Continue');
        continueBtn.addEventListener('click', ticketConfirmHandler);

        Object.values(inputDOMSelectors)
            .forEach((input) => input.value = '');
        otherDOMSelectors.nextStepBtn.disabled = true;
    }

    function editInfoHandler(event) {
        event.currentTarget.parentNode.remove();
        for (const key in inputsContainer) {
            inputDOMSelectors[key].value = inputsContainer[key];
        }
        // document.getElementById('first-name').value = inputsContainer.firstName;
        // document.getElementById('last-name').value = inputsContainer.firstName;;
        // document.getElementById('people-count').value = inputsContainer.peopleCount;
        // document.getElementById('from-date').value = inputsContainer.date;
        // document.getElementById('days-count').value = inputsContainer.days;
        otherDOMSelectors.nextStepBtn.disabled = false;
    }

    function ticketConfirmHandler() {
        currentLi = this.parentNode;
        currentEditBtn = currentLi.querySelector('.edit-btn');
        currentContinueBtn = currentLi.querySelector('.continue-btn');

        // currentLi.setAttribute('class', 'ticket-content')

        const confirmBtn = createNewElement('button', ['confirm-btn'], currentLi, 'Confirm');
        confirmBtn.addEventListener('click', confirmationTicketHandler);
        const cancelBtn = createNewElement('button', ['cancel-btn'], currentLi, 'Cancel');
        cancelBtn.addEventListener('click', cancelConfirmationHandler);

        otherDOMSelectors.confirmTicketUl
            .appendChild(currentLi);

        currentEditBtn.remove();
        currentContinueBtn.remove();
    }

    function cancelConfirmationHandler() {
        this.parentNode.remove();
        otherDOMSelectors.nextStepBtn.disabled = false;
    }

    function confirmationTicketHandler() {
        otherDOMSelectors.mainDiv.remove();
        createNewElement('h1', null, otherDOMSelectors.body, 'Thank you, have a nice day!', 'thank-you');
        const backBtn = createNewElement('button', null, otherDOMSelectors.body, 'Back', 'back-btn');

        backBtn.addEventListener('click', reloadPageHandler);
    }

    function reloadPageHandler() {
        window.location.reload()
    }

    function createNewElement(type, classes, parentNode, content, id) {
        const newHtmlElement = document.createElement(type);
        if (id) {
            newHtmlElement.id = id;
        }
        if (content) {
            if (type !== 'input' && type !== 'textArea') {
                newHtmlElement.textContent = content;
            } else if (type === 'input' || type === 'textArea') {
                newHtmlElement.value = content;
            }
        }
        if (classes && classes.length > 0) {
            newHtmlElement.classList.add(...classes);
        }
        if (parentNode) {
            parentNode.appendChild(newHtmlElement);
        }
        return newHtmlElement;
    }
}




