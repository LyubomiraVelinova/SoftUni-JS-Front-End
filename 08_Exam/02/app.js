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

    let clicks = 0;
    let totalPoints = 0;

    function createTaskHandler() {
        const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!allFieldsHaveValue) {
            console.log('Invalid field');
            return;
        }
        clicks += 1
        totalPoints += Number(inputDOMSelectors.estimationPoints.value);
        const article = createElement('article', othersDOMSelectors.taskSection, ['task-card'], null, `task-${clicks}`);
        const labelContent = inputDOMSelectors.label.value;
        // DO THIS!!!!!!!!!!!!!!!!!!!!
        createElement('div', article, ['task-card-label', `${labelClasses[labelContent]}`], `${labelContent} ${labelIcons[labelContent]}`);
        // 
        createElement('h3', article, ['task-card-title'], inputDOMSelectors.title.value);
        createElement('p', article, ['task-card-description'], inputDOMSelectors.description.value);
        createElement('div', article, ['task-card-points'], `Estimated at ${inputDOMSelectors.estimationPoints.value} pts`);
        createElement('div', article, ['task-card-assignee'], `Assigned to: ${inputDOMSelectors.assignee.value}`);
        const buttonContainer = createElement('div', article, ['task-card-actions']);
        const deleteBtn = createElement('button', buttonContainer, null, 'Delete');
        othersDOMSelectors.totalPointsCounter.textContent = `Total Points ${totalPoints}pts`

        // CLEAR ALL INPUTS
        Object.values(inputDOMSelectors)
            .forEach((input) => input.value = '');

        deleteBtn.addEventListener('click', deleteTaskHandler);
  
    }

    function deleteTaskHandler(event) {
        const currentArticle = event.currentTarget.parentNode.parentNode;
        const currentTaskId = currentArticle.id

        const [currentLabelText, currentTitle, currentDescription, currentPointsText, currentAssigneeText, _btn] = Array.from(currentArticle.children);
        inputDOMSelectors.title.value = currentTitle.textContent;
        inputDOMSelectors.description.value = currentDescription.textContent;
        const currentLabel = currentLabelText.textContent.split(' ')[0];
        inputDOMSelectors.label.value = currentLabel;
        const currentPoints = Number(currentPointsText.textContent.split(' ')[2]);
        inputDOMSelectors.estimationPoints.value = currentPoints;
        const currentAssignee = currentAssigneeText.textContent.split(': ')[1]
        inputDOMSelectors.assignee.value = currentAssignee;

        othersDOMSelectors.deleteTaskBtn.disabled = false;
        othersDOMSelectors.createTaskBtn.disabled = true;

        inputDOMSelectors.title.disabled = true;
        inputDOMSelectors.description.disabled = true;
        inputDOMSelectors.label.disabled = true;
        inputDOMSelectors.estimationPoints.disabled = true;
        inputDOMSelectors.assignee.disabled = true;

        othersDOMSelectors.hiddenInput.value = currentTaskId;
        othersDOMSelectors.deleteTaskBtn.addEventListener('click', deleteCurrentTaskHandler);

        function deleteCurrentTaskHandler() {
            currentArticle.remove();
            Object.values(inputDOMSelectors)
                .forEach((input) => input.value = '');
            inputDOMSelectors.title.disabled = false;
            inputDOMSelectors.description.disabled = false;
            inputDOMSelectors.label.disabled = false;
            inputDOMSelectors.estimationPoints.disabled = false;
            inputDOMSelectors.assignee.disabled = false;

            othersDOMSelectors.deleteTaskBtn.disabled = true;
            othersDOMSelectors.createTaskBtn.disabled = false;

            totalPoints -= currentPoints;
            othersDOMSelectors.totalPointsCounter.textContent = `Total Points ${totalPoints}pts`
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