function solve() {
    const MAIN_URL = 'http://localhost:3030/jsonstore/tasks/'
    const inputDOMSelectors = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name'),
    }
    const othersDOMSelectors = {
        loadBtn: document.getElementById('load-course'),
        courseList: document.getElementById('list'),
        addCourseBtn: document.getElementById('add-course'),
        editCourseBtn: document.getElementById('edit-course'),
    }

    othersDOMSelectors.loadBtn.addEventListener('click', loadCoursesHandler);
    othersDOMSelectors.addCourseBtn.addEventListener('click', addCourseHandler);

    let result = {};
    function loadCoursesHandler(event) {
        if (event) {
            event.preventDefault()
        }
        othersDOMSelectors.courseList.innerHTML = '';
        fetch(MAIN_URL)
            .then((res) => res.json())
            .then((data) => {
                for (const key in data) {
                    const { title, type, description, teacher, _id } = data[key]
                    result[_id] = { title, type, description, teacher }
                    const divContainer = createElement('div', othersDOMSelectors.courseList, ['container'], null, _id);
                    createElement('h2', divContainer, null, title);
                    createElement('h3', divContainer, null, teacher);
                    createElement('h3', divContainer, null, type);
                    createElement('h4', divContainer, null, description);
                    const editBtn = createElement('button', divContainer, ['edit-btn'], 'Edit Course');
                    const finishBtn = createElement('button', divContainer, ['finish-btn'], 'Finish Course');

                    editBtn.addEventListener('click', editCourseHandler);
                    finishBtn.addEventListener('click', finishCourseHandler);
                }
            })
            .catch((err) => console.error(err))
    }

    function addCourseHandler(event) {
        event.preventDefault()

        const validInputs = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!validInputs) {
            console.log('Error!');
            return
        }
        const { title, type, description, teacher } = inputDOMSelectors;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: title.value,
                type: type.value,
                description: description.value,
                teacher: teacher.value,
            })
        }
        fetch(MAIN_URL, httpHeaders);

        loadCoursesHandler();

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = '';
        }
    }

    function editCourseHandler(event) {
        const currentDivContainer = event.currentTarget.parentNode;
        const currentId = currentDivContainer.id;
        currentDivContainer.remove();

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = result[currentId][key];
        }

        othersDOMSelectors.addCourseBtn.disabled = true;
        othersDOMSelectors.editCourseBtn.disabled = false;

        othersDOMSelectors.editCourseBtn.addEventListener('click', () => {
            const httpHeaders = {
                method: 'PUT',
                body: JSON.stringify({
                    title: inputDOMSelectors.title.value,
                    type: inputDOMSelectors.type.value,
                    description: inputDOMSelectors.description.value,
                    teacher: inputDOMSelectors.teacher.value,
                    _id: currentId,
                })
            }
            fetch(MAIN_URL + currentId, httpHeaders);

            loadCoursesHandler();

            for (const key in inputDOMSelectors) {
                inputDOMSelectors[key].value = '';
            }

            othersDOMSelectors.addCourseBtn.disabled = false;
            othersDOMSelectors.editCourseBtn.disabled = true;
        });
    }

    function finishCourseHandler(event) {
        const currentDivContainer = event.currentTarget.parentNode;
        const currentId = currentDivContainer.id;
        fetch(MAIN_URL + currentId, {
            method: 'DELETE'
        });
        
        loadCoursesHandler();
    }

    function createElement(type, parent, classes, content, id) {
        const htmlElement = document.createElement(type);

        if (content && type !== 'input' && type !== 'textArea') {
            htmlElement.textContent = content;
        }
        if (content && (type === 'input' || type === 'textArea')) {
            htmlElement.value = content;
        }
        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }
        if (id) {
            htmlElement.id = id;
        }
        if (parent) {
            parent.appendChild(htmlElement);
        }

        return htmlElement;
    }
}

solve()