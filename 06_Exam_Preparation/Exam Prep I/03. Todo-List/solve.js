function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const loadBtn = document.getElementById('load-button');
    const addBtn = document.getElementById('add-button');
    const listContainer = document.getElementById('todo-list');
    const titleInput = document.getElementById('title');

    // Event Listeners to the buttons
    loadBtn.addEventListener('click', loadTasksHandler);
    addBtn.addEventListener('click', addNewTaskHandler);


    const dataContainer = {};
    function loadTasksHandler(event) {
        // BECAUSE OF DEFAULT ACT OF SUBMIT 
        if (event) {
            event.preventDefault();
        }

        listContainer.innerHTML = '';
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                const tasks = Object.values(data)
                for (const { name, _id } of tasks) {
                    dataContainer[name] = _id
                    const li = createElement('li', listContainer);
                    li.id = _id;
                    createElement('span', li, name);
                    const removeBtn = createElement('button', li, 'Remove');
                    const editBtn = createElement('button', li, 'Edit');

                    removeBtn.addEventListener('click', removeTaskHandler);
                    editBtn.addEventListener('click', editTaskHandler);
                }
            })
            .catch((err) => console.error(err))
    }

    async function addNewTaskHandler(event) {
        event.preventDefault();
        try {
            const name = titleInput.value;
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({ name }),
            }
            const response = await fetch(BASE_URL, httpHeaders);
            loadTasksHandler(event);
            titleInput.value = '';
        } catch (e) {
        }
    }

    async function removeTaskHandler(event) {
        const currentLi = event.currentTarget.parentNode;
        const currentName = currentLi.children[0].textContent;
        const currentId = dataContainer[currentName];
        // OR 
        // const currentId = event.currentTarget.parentNode.id;
        const url = `${BASE_URL}${currentId}`
        const httpHeaders = {
            method: 'DELETE',
        }
        await fetch(url, httpHeaders)
        loadTasksHandler(event);
    }

    function editTaskHandler(event) {
        const currentLi = event.currentTarget.parentNode;
        const [span, _currentRemoveBtn, currentBtn] = Array.from(currentLi.children);

        const editInput = createElement('input', null, span.textContent)
        currentLi.prepend(editInput);
        const submitBtn = createElement('button', currentLi, 'Submit');
        submitBtn.addEventListener('click', submitTaskHandler);
        span.remove();
        currentBtn.remove();

        // ANOTHER WAY
        // currentLi.innerHTML = '';
        // currentLi.appendChild(editInput);
        // currentLi.appendChild(currentRemoveBtn);
        // currentLi.appendChild(currentBtn);
    }

    function submitTaskHandler(event) {
        const currentLi = this.parentNode;
        const currentId = currentLi.id;
        const currentName = currentLi.children[0].value;
        const url = `${BASE_URL}${currentId}`;
        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({ name: currentName })
        }
        fetch(url, httpHeaders)
            .then(() => loadTasksHandler(event))
            .catch((err) => console.error(err))

    }

    function createElement(type, parentNode, content) {
        const htmlElement = document.createElement(type);

        if (content && type !== 'input' && type !== 'textArea') {
            htmlElement.textContent = content;
        }
        if (content && (type === 'input' || type === 'textArea')) {
            htmlElement.value = content;
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}

attachEvents();