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

// function solve() {
//     const title = document.getElementById('title');
//     const description = document.getElementById('description');
//     const optionSelect = document.getElementById('label');
//     const points = document.getElementById('points');
//     const taskAssignee = document.getElementById('assignee');
//     const createTaskButton = document.getElementById('create-task-btn');
//     const deleteTaskButton = document.getElementById('delete-task-btn');
//     const tasksSection = document.getElementById('tasks-section');
//     const totalPoints = document.getElementById('total-sprint-points');
//     const hiddenInput = document.getElementById('task-id')
//     let totalSprintPoints = 0
//     let taskID = 0

//     const features = {
//         'Feature': '&#8865;',
//         'Low Priority Bug': '&#9737;',
//         'High Priority Bug': '&#9888;'
//     }

//     const divClasses = {
//         'Feature': 'feature',
//         'Low Priority Bug': 'low-priority',
//         'High Priority Bug': 'high-priority'
//     }

//     const articles = {}

//     createTaskButton.addEventListener('click', createTask)

//     function createTask() {
//         if (!title.value || !description.value || !optionSelect.value || !points.value || !taskAssignee.value || points.value < 0) {
//             return;
//         }
//         totalSprintPoints += Number(points.value);
//         totalPoints.textContent = `Total Points ${totalSprintPoints}pts`
//         taskID++;

//         const article = document.createElement('article')
//         article.id = `task-${taskID}`;
//         article.className = 'task-card';
//         const firstDiv = document.createElement('div');
//         firstDiv.classList.add('task-card-label', `${divClasses[optionSelect.value]}`)
//         // firstDiv.innerHTML = `${optionSelect.value} ${features[optionSelect.value]}`
//         article.appendChild(firstDiv);
//         const h3 = document.createElement('h3');
//         h3.className = 'task-card-title';
//         h3.textContent = title.value;
//         article.appendChild(h3);
//         const p = document.createElement('p');
//         p.className = 'task-card-description';
//         p.textContent = description.value;
//         article.appendChild(p);
//         const secondDiv = document.createElement('div');
//         secondDiv.className = 'task-card-points';
//         secondDiv.textContent = `Estimated at ${points.value} pts`;
//         article.appendChild(secondDiv);
//         const thirdDiv = document.createElement('div');
//         thirdDiv.className = 'task-card-assignee';
//         thirdDiv.textContent = `Assigned to: ${taskAssignee.value}`
//         article.appendChild(thirdDiv);
//         const buttonsDiv = document.createElement('div');
//         buttonsDiv.className = 'task-card-actions';
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         // deleteButton.addEventListener('click', confirmDelete);
//         buttonsDiv.appendChild(deleteButton);
//         article.appendChild(buttonsDiv);
//         tasksSection.appendChild(article);
//         articles[`task-${taskID}`] = {
//             title: title.value,
//             description: description.value,
//             optionSelect: optionSelect.value,
//             points: Number(points.value),
//             taskAssignee: taskAssignee.value,
//             hiddenInput: hiddenInput.value
//         }
//     }
// }