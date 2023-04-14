// TODO:
function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-board-btn');
    loadBtn.addEventListener('click', loadBoardHandler);
    const addTaskBtn = document.getElementById('create-task-btn');
    addTaskBtn.addEventListener('click', addTaskHandler);
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const ulContainers = Array.from(document.querySelectorAll('.task-list'));

    const tasks = {
        'ToDo': document.getElementById('todo-section'),
        'In Progress': document.getElementById('in-progress-section'),
        'Code Review': document.getElementById('code-review-section'),
        'Done': document.getElementById('done-section'),
    }

    const tasksButtons = {
        'ToDo': 'Move to In Progress',
        'In Progress': 'Move to Code Review',
        'Code Review': 'Move to Done',
        'Done': 'Close',
    }

    function loadBoardHandler() {
        ulContainers.forEach(ul => {
            ul.innerHTML = ''
        });

        fetch(URL)
            .then((res) => res.json())
            .then((result) => {
                const data = Object.values(result);
                for (const line of data) {
                    const { title, description, status, _id } = line;

                    const li = document.createElement('li');
                    li.classList.add('task');
                    li.id = _id;
                    const h3 = document.createElement('h3');
                    h3.textContent = title;
                    li.appendChild(h3);
                    const p = document.createElement('p');
                    p.textContent = description;
                    li.appendChild(p);
                    const button = document.createElement('button');
                    button.textContent = tasksButtons[status];
                    li.appendChild(button);
                    const ul = tasks[status].children[1];
                    ul.appendChild(li);

                    button.addEventListener('click', moveAndCloseTaskHandler);
                }
            })
            .catch((err) => console.error(err));
    }

    function addTaskHandler() {
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: titleInput.value,
                description: descriptionInput.value,
                status: 'ToDo',
            }),
        }
        fetch(URL, httpHeaders);
        loadBoardHandler();
        titleInput.value = '';
        descriptionInput.value = '';
    }

    function moveAndCloseTaskHandler(event) {
        const currentBtn = event.currentTarget;
        const currentLi = currentBtn.parentNode;
        const currentUrl = URL + currentLi.id;
        if (currentBtn.textContent !== 'Close') {
            const currentContainer = currentBtn.textContent.split(' ');
            const nextStatus = currentContainer.splice(2, currentContainer.length).join(' ');
            const nextUl = tasks[nextStatus].children[1];
            nextUl.appendChild(currentLi);
            currentBtn.textContent = tasksButtons[nextStatus];

            const httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({ status: nextStatus })
            }
            fetch(currentUrl, httpHeaders);
        } else {
            const httpHeaders = {
                method: 'DELETE',
            }
            fetch(currentUrl, httpHeaders);
            currentLi.remove();
            loadBoardHandler();
        }
    }
}

attachEvents();