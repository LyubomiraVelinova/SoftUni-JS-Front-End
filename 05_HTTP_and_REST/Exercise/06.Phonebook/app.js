function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
    const btnLoad = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const phoneBookContainer = document.getElementById('phonebook');

    btnLoad.addEventListener('click', loadPhoneBookHandler);
    createBtn.addEventListener('click', createContact);

    async function loadPhoneBookHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            const phoneBookEntries = await phoneBookRes.json();
            let phoneBookData = Object.values(phoneBookEntries);
            phoneBookContainer.innerHTML = '';
            for (const { phone, person, _id } of phoneBookData) {
                const li = document.createElement('li');
                li.innerHTML = `${person}: ${phone}`;
                const button = document.createElement('button');
                button.innerText = 'Delete';
                button.id = _id;
                button.addEventListener('click', deletePhoneBookHandler);
                li.appendChild(button)
                phoneBookContainer.appendChild(li);
            }
        } catch (err) {
            console.log(err);
        }
    }

    function createContact() {
        const person = personInput.value;
        const phone = phoneInput.value;

        fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-type': 'application\json' },
            body: JSON.stringify({ person, phone })
        })
            .then((res) => res.json())
            .then(() => {
                loadPhoneBookHandler();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((err) => console.log(err))
    }

    async function deletePhoneBookHandler() {
        const id = this.id;
        // OR const id = e.currentTarget.id;
        const httpHeaders = {
            method: 'DELETE'
        };
        fetch(`${BASE_URL}/${id}`, httpHeaders)
            .then((res) => res.json())
            .then(loadPhoneBookHandler)
            .catch((err) => console.log(err));
    }
}

attachEvents();