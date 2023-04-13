function sprintReview(input) {
    let commandParser = {
        'Add New': addNewTask,
        'Change Status': changeTasksStatus,
        'Remove Task': removeTask,
    }

    let statusParser = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0,
    }

    let n = input.shift();
    let tasks = {};
    for (let index = 0; index < n; index++) {
        let currentTask = {};
        let [assignee, taskId, title, status, estimatedPoints] = input.shift().split(':');
        if (tasks.hasOwnProperty(assignee)) {
            tasks[assignee][taskId] = { title, status, estimatedPoints };
        } else {
            currentTask[taskId] = { title, status, estimatedPoints }
            tasks[assignee] = currentTask;
        }
    }

    for (const line of input) {
        let [command, ...others] = line.split(':');
        commandParser[command](...others);
    }

    for (const key in tasks) {
        for (const taskId in tasks[key]) {
            statusParser[tasks[key][taskId].status] += Number(tasks[key][taskId].estimatedPoints)
        }
    }
    for (const key in statusParser) {
        if (key === 'Done') {
            console.log(`${key} Points: ${statusParser[key]}pts`);
        } else {
            console.log(`${key}: ${statusParser[key]}pts`);
        }
    }

    isSuccessful()

    function isSuccessful() {
        let isSuccessful = false;
        let donePoints = Number(statusParser['Done']);
        let otherPoints = Number(statusParser['ToDo']) + Number(statusParser['In Progress']) + Number(statusParser['Code Review']);
        if (donePoints >= otherPoints) {
            isSuccessful = true;
        }
        if (isSuccessful) {
            console.log(`Sprint was successful!`);
        } else {
            console.log(`Sprint was unsuccessful...`);
        }
    }

    function addNewTask(assignee, taskId, title, status, estimatedPoints) {
        let newTask = {};
        newTask[taskId] = { title, status, estimatedPoints };
        if (tasks.hasOwnProperty(assignee)) {
            tasks[assignee][taskId] = { title, status, estimatedPoints };
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function changeTasksStatus(assignee, currentTaskId, newStatus) {
        if (tasks.hasOwnProperty(assignee)) {
            if (tasks[assignee].hasOwnProperty(currentTaskId)) {
                tasks[assignee][currentTaskId].status = newStatus;
            } else {
                console.log(`Task with ID ${currentTaskId} does not exist for ${assignee}!`);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        }
    }

    function removeTask(assignee, index) {
        if (tasks.hasOwnProperty(assignee)) {
            let tasksCount = Object.keys(tasks[assignee]).length;
            if (tasksCount > index && index >= 0) {
                let currentTaskId = Object.keys(tasks[assignee])[index];
                delete tasks[assignee][currentTaskId];
            } else {
                console.log("Index is out of range!")
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        }
    }
}


sprintReview([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]

)

sprintReview([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]
)

// addNewAssignee('Kiril', 'BOP-1217', 'Add Info Page', 'In Progress:5')