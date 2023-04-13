window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        estimationPoints: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
    }

    const othersDOMSelectors = {
        createTaskBtn: document.getElementById('create-task-btn'),
        deleteTaskBtn: document.getElementById('delete-task-btn'),
        taskSection: document.getElementById('tasks-section'),
        hiddenInput: document.getElementById('task-id'),
        totalPointsCounter: document.getElementById('total-sprint-points'),
    }

    const labelIcons = {
        'Feature': '&#8865',
        'Low Priority Bug': '&#9737',
        'High Priority Bug': '&#9888',
    }

    const labelClasses = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    }

    othersDOMSelectors.createTaskBtn.addEventListener('click', createTaskHandler);

    let taskID = 0;
    let totalPoints = 0;
    const articles = {};

    function createTaskHandler() {
        const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!allFieldsHaveValue || inputDOMSelectors.estimationPoints.value < 0) {
            return;
        }

        taskID++;
        totalPoints += Number(inputDOMSelectors.estimationPoints.value);
        othersDOMSelectors.totalPointsCounter.textContent = `Total Points ${totalPoints}pts`

        const article = createElement('article', othersDOMSelectors.taskSection, ['task-card'], null, `task-${taskID}`);
        const labelContent = inputDOMSelectors.label.value;
        createElement('div', article, ['task-card-label', `${labelClasses[labelContent]}`], `${labelContent} ${labelIcons[labelContent]}`, null, null, true);
        // ANOTHER WAY
        // const firstDiv = document.createElement('div');
        // firstDiv.classList.add('task-card-label', `${labelClasses[labelContent]}`);
        // firstDiv.innerHTML = `${labelContent} ${labelIcons[labelContent]}`;
        // article.appendChild(firstDiv);
        // 
        createElement('h3', article, ['task-card-title'], inputDOMSelectors.title.value);
        createElement('p', article, ['task-card-description'], inputDOMSelectors.description.value);
        createElement('div', article, ['task-card-points'], `Estimated at ${inputDOMSelectors.estimationPoints.value} pts`);
        createElement('div', article, ['task-card-assignee'], `Assigned to: ${inputDOMSelectors.assignee.value}`);
        const buttonContainer = createElement('div', article, ['task-card-actions']);
        const deleteBtn = createElement('button', buttonContainer, null, 'Delete');
        deleteBtn.addEventListener('click', deleteTaskHandler);

        articles[`task-${taskID}`] = {
            title: inputDOMSelectors.title.value,
            description: inputDOMSelectors.description.value,
            optionSelect: inputDOMSelectors.label.value,
            points: inputDOMSelectors.estimationPoints.value,
            taskAssignee: inputDOMSelectors.assignee.value,
            hiddenInput: othersDOMSelectors.hiddenInput.value,
        }

        // CLEAR ALL INPUTS
        Object.values(inputDOMSelectors)
            .forEach((input) => input.value = '');
    }

    function deleteTaskHandler(event) {
        const currentArticle = event.currentTarget.parentNode.parentNode;
        const currentTaskId = currentArticle.id

        inputDOMSelectors.title.value = articles[currentTaskId].title;
        inputDOMSelectors.description.value = articles[currentTaskId].description;
        inputDOMSelectors.label.value = articles[currentTaskId].optionSelect;
        inputDOMSelectors.estimationPoints.value = articles[currentTaskId].points;
        inputDOMSelectors.assignee.value = articles[currentTaskId].taskAssignee;
        othersDOMSelectors.hiddenInput.value = articles[currentTaskId].hiddenInput;
        // const [currentLabelText, currentTitle, currentDescription, currentPointsText, currentAssigneeText, _btn] = Array.from(currentArticle.children);
        // inputDOMSelectors.title.value = currentTitle.textContent;
        // inputDOMSelectors.description.value = currentDescription.textContent;
        // const currentLabel = currentLabelText.textContent.split(' ')[0];
        // inputDOMSelectors.label.value = currentLabel;
        // const currentPoints = Number(currentPointsText.textContent.split(' ')[2]);
        // inputDOMSelectors.estimationPoints.value = currentPoints;
        // const currentAssignee = currentAssigneeText.textContent.split(': ')[1]
        // inputDOMSelectors.assignee.value = currentAssignee;
        // othersDOMSelectors.hiddenInput.value = currentTaskId;

        inputDOMSelectors.title.disabled = true;
        inputDOMSelectors.description.disabled = true;
        inputDOMSelectors.label.disabled = true;
        inputDOMSelectors.estimationPoints.disabled = true;
        inputDOMSelectors.assignee.disabled = true;
        othersDOMSelectors.deleteTaskBtn.disabled = false;
        othersDOMSelectors.createTaskBtn.disabled = true;

        othersDOMSelectors.deleteTaskBtn.addEventListener('click', () => {
            currentArticle.remove();
            inputDOMSelectors.title.disabled = false;
            inputDOMSelectors.description.disabled = false;
            inputDOMSelectors.label.disabled = false;
            inputDOMSelectors.estimationPoints.disabled = false;
            inputDOMSelectors.assignee.disabled = false;
            othersDOMSelectors.deleteTaskBtn.disabled = true;
            othersDOMSelectors.createTaskBtn.disabled = false;

            totalPoints -= currentPoints;
            othersDOMSelectors.totalPointsCounter.textContent = `Total Points ${totalPoints}pts`

            Object.values(inputDOMSelectors)
                .forEach((input) => input.value = '');
        });
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

// function solve() {

    // title.value = articles[id].title;
    // description.value = articles[id].description;
    // optionSelect.value = articles[id].optionSelect;
    // points.value = articles[id].points;
    // taskAssignee.value = articles[id].taskAssignee;
    // hiddenInput.value = articles[id].hiddenInput;
    // title.disabled = true;
    // description.disabled = true;
    // optionSelect.disabled = true;
    // points.disabled = true;
    // taskAssignee.disabled = true;
    // createTaskButton.disabled = true;
    // deleteTaskButton.disabled = false;
    // deleteTaskButton.addEventListener('click', () => {
    //     totalSprintPoints -= points.value;
    //     article.remove()
    //     createTaskButton.disabled = false;
    //     deleteTaskButton.disabled = true;
    //     title.disabled = false;
    //     description.disabled = false;
    //     optionSelect.disabled = false;
    //     points.disabled = false;
    //     taskAssignee.disabled = false;
    //     totalPoints.textContent = `Total Points ${totalSprintPoints}pts`
    //     title.value = '';
    //     description.value = '';
    //     optionSelect.value = '';
    //     points.value = '';
    //     taskAssignee.value = '';
    //     hiddenInput.value = '';
// }