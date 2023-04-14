window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count'),
    }

    const inputsContainer = {
        firstName: null,
        lastName: null,
        dateIn: null,
        dateOut: null,
        peopleCount: null,
    }

    const othersDOMSelectors = {
        nextBtn: document.getElementById('next-btn'),
        infoContainer: document.querySelector('.info-list'),
        confirmContainer: document.querySelector('.confirm-list'),
        // completeReservationSection: document.getElementById('complete-reservation');
        verification: document.getElementById('verification'),
    }

    othersDOMSelectors.nextBtn.addEventListener('click', reservationHandler);

    function reservationHandler(event) {
        event.preventDefault();
        const checkInDate = new Date(inputDOMSelectors.dateIn.value);
        const checkOutDate = new Date(inputDOMSelectors.dateOut.value);
        const allFieldsFilled = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!allFieldsFilled || checkOutDate <= checkInDate || inputDOMSelectors.peopleCount.value <= 0) {
            console.log('Error');
            return;
        }

        const { firstName, lastName, dateIn, dateOut, peopleCount } = inputDOMSelectors;
        const infoLi = createDOMElement('li', ['reservation-content'], othersDOMSelectors.infoContainer);
        const article = createDOMElement('article', null, infoLi);
        createDOMElement('h3', null, article, `Name: ${firstName.value} ${lastName.value}`);
        createDOMElement('p', null, article, `From date: ${dateIn.value}`);
        createDOMElement('p', null, article, `To date: ${dateOut.value}`);
        createDOMElement('p', null, article, `For ${peopleCount.value} people`);
        const editBtn = createDOMElement('button', ['edit-btn'], infoLi, 'Edit');
        editBtn.addEventListener('click', editReservationHandler);
        const continueBtn = createDOMElement('button', ['continue-btn'], infoLi, 'Continue');
        continueBtn.addEventListener('click', continueReservationHandler);

        for (const key in inputDOMSelectors) {
            inputsContainer[key] = inputDOMSelectors[key].value;
        }

        othersDOMSelectors.nextBtn.disabled = true;
        othersDOMSelectors.verification.removeAttribute('class');
        othersDOMSelectors.verification.textContent = '';
        Object.values(inputDOMSelectors)
            .forEach((input) => input.value = '');
    }

    function editReservationHandler() {
        othersDOMSelectors.infoContainer.innerHTML = '';
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = inputsContainer[key];
        }
        othersDOMSelectors.nextBtn.disabled = false;
    }

    function continueReservationHandler() {
        const currentList = this.parentNode;

        this.remove();
        currentList.children[1].remove();
        
        const confirmBtn = createDOMElement('button', ['confirm-btn'], currentList, 'Confirm');
        const cancelBtn = createDOMElement('button', ['cancel-btn'], currentList, 'Cancel');
        confirmBtn.addEventListener('click', confirmationHandler);
        cancelBtn.addEventListener('click', cancelationHandler);
        othersDOMSelectors.confirmContainer.appendChild(currentList);
    }

    function confirmationHandler() {
        this.parentNode.remove();
        othersDOMSelectors.nextBtn.disabled = false;
        othersDOMSelectors.verification.classList.add('reservation-confirmed');
        othersDOMSelectors.verification.textContent = 'Confirmed.';
    }

    function cancelationHandler() {
        this.parentNode.remove();
        othersDOMSelectors.nextBtn.disabled = false;
        othersDOMSelectors.verification.classList.add('reservation-cancelled');
        othersDOMSelectors.verification.textContent = 'Cancelled.';
    }

    function createDOMElement(tag, classes, parent, content, innerHtmlText) {
        const element = document.createElement(tag);
        if (content && innerHtmlText) {
            element.innerHTML = content;
        }
        if (classes) {
            element.classList.add(classes);
        }
        if (content) {
            if (tag !== 'input' && tag !== 'textArea') {
                element.textContent = content;
            } else {
                element.value = content;
            }
        }
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}





