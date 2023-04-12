function solve(input) {
    const n = input.shift();
    let statusParser = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0,
    }

    let board = {};
    for (let i = 0; i < n; i++) {
        const currentBoard = {};
        const [assignee, taskId, title, status, estimatedPoints] = input.shift().split(':');
        if (board.hasOwnProperty(assignee)) {
            board[assignee][taskId] = { title, status, estimatedPoints };
        } else {
            currentBoard[taskId] = { title, status, estimatedPoints };
            board[assignee] = currentBoard;
        }
    }
    for (const line of input) {
        const tokens = line.split(':');
        let command = tokens.shift();
        if (command === 'Add New') {
            const [assignee, taskId, title, status, estimatedPoints] = tokens;
            if (board.hasOwnProperty(assignee)) {
                board[assignee][taskId] = { title, status, estimatedPoints };
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command === 'Change Status') {
            const [assignee, taskId, newStatus] = tokens;
            if (board.hasOwnProperty(assignee)) {
                if (board[assignee].hasOwnProperty(taskId)) {
                    board[assignee][taskId].status = newStatus;
                } else {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        } else if (command === 'Remove Task') {
            const [assignee, index] = tokens;
            if (board.hasOwnProperty(assignee)) {
                const keysOfTasks = Object.keys(board[assignee]);
                if (keysOfTasks.length > Number(index)) {
                    const currentTask = keysOfTasks[Number(index)];
                    delete board[assignee][currentTask];
                } else {
                    console.log(`Index is out of range!`);
                }
            } else {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
    }
    let totalDone = 0;
    let totalElse = 0;
    for (const key in board) {
        for (const taskId in board[key]) {
            statusParser[board[key][taskId].status] += Number(board[key][taskId].estimatedPoints);
            if (board[key][taskId].status === 'Done') {
                totalDone += Number(board[key][taskId].estimatedPoints)
            } else {
                totalElse += Number(board[key][taskId].estimatedPoints);
            }
        }
    }

    console.log(`ToDo: ${statusParser['ToDo']}pts`);
    console.log(`In Progress: ${statusParser['In Progress']}pts`);
    console.log(`Code Review: ${statusParser['Code Review']}pts`);
    console.log(`Done Points: ${statusParser['Done']}pts`);

    if (totalDone >= totalElse) {
        console.log(`Sprint was successful!`)
    } else {
        console.log(`Sprint was unsuccessful...`)
    }
}

solve([
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