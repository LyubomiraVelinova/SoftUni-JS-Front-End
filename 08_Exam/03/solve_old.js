// TODO:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    const loadBoardBtn = document.getElementById('load-board-btn');
    const addTaskBtn = document.getElementById('create-task-btn');
    const toDoArticle = document.getElementById('todo-section');
    const inArticle = document.getElementById('in-progress-section');
    const codeArticle = document.getElementById('code-review-section');
    const doneArticle = document.getElementById('done-section');
    const titleInput = document.getElementById('title');
    const taskDescriptionInput = document.getElementById('description');

    const taskParser = {
        'ToDo': toDoArticle,
        'In Progress': inArticle,
        'Code Review': codeArticle,
        'Done': doneArticle,
    }

    loadBoardBtn.addEventListener('click', addHandler);
    addTaskBtn.addEventListener('click', addTaskHandler);

    // const dataContainer = {};
    function addHandler() {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((data) => {
                const tasks = Object.values(data)
                for (const { title, description, status, _id } of tasks) {

                    // dataContainer[title] = _id
                    const articleContainer = taskParser[status]
                    const li = createElement('li', articleContainer, ['task']);
                    createElement('h3', li, null, title);
                    createElement('p', li, null, description);
                    if (status === 'ToDo') {
                        const btn = createElement('button', li, null, 'Move to In Progress');
                    } else if (status === 'In Progress') {
                        const btn = createElement('button', li, null, 'Move to Code Review');
                    } else if (status === 'Code Review ') {
                        const btn = createElement('button', li, null, 'Move to Done');
                    } else {
                        const btn = createElement('button', li, null, 'Close');
                    }
                }
            })
            .catch((err) => console.error(err))
    }
    async function addTaskHandler() {
        try {
            const title = titleInput.value;
            const description = taskDescriptionInput.value;
            const httpHeaders = {
                method: 'POST',
                body: JSON.stringify({ title, description }),
            }
            const response = await fetch(BASE_URL, httpHeaders);
            addHandler();
            titleInput.value = '';
            taskDescriptionInput.value = '';
        } catch (e) {
        }
    }

    function createElement(type, parentNode, classes, content, id, attributes, useInnerHtml) {

        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
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

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }

}

attachEvents();