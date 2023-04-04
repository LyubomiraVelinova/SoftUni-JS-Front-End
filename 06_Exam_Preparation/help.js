// VALIDATION OF INPUT FIELDS:
function inputValidator() {
    // FIRST STEP - Put all inputs in one container
    const inputDOMSelectors = {
        firstNameInput: document.getElementById('first-name'),
        lastNameInput: document.getElementById('last-name'),
        ageInput: document.getElementById('age'),
        storyTitleInput: document.getElementById('story-title'),
        genreInput: document.getElementById('genre'),
        storyInput: document.getElementById('story'),
    }

    // SECOND STEP - Convert object into array and check wether every input is not empty
    const allFieldsHaveValue = Object.values(inputDOMSelectors)
        .every((input) => input.value !== '');

    // THIRD STEP - If the condition return false result is returned
    if (!allFieldsHaveValue) {
        console.log('Empty field');
        return;
    }
}

// COMMAND PARSER INSTEAD OF IF-ELSE:
// FIRST STEP - Make object of commands as a key and name of functions as a value
let commandParser = {
    'Add': addPiece,
    'Remove': removePiece,
    'ChangeKey': changeKey,
};
// SECOND STEP - Then you can call it as a function/pass the parameters with spread operator if they are more than one/
commandParser[command](...lineArr);


// FUNCTION THAT HANDLE ERRORS 
function handleError(err) {
    console.error(err);
}
// Can be use in fetch requests in catch, can be invoked like this:
fetch('...')
    .catch(handleError)


// AJAX FUNCTIONS - TWO DIFFERENT WAYS FOR ONE AND THE SAME THING
// ASYNC AJAX FUNCTION removeTaskHandler() - same effect as AJAX function removeTaskHandler()
async function removeTaskHandler() {
    try {
        const url = `${BASE_URL}${currentId}`
        const httpHeaders = {
            method: 'DELETE',
        }
        await fetch(url, httpHeaders)
        loadTasksHandler();
    } catch (e) {
    }
}
// AJAX FUNCTION removeTaskHandler() - same effect as normal function removeTaskHandler()
function removeTaskHandler() {
    const url = `${BASE_URL}${currentId}`
    const httpHeaders = {
        method: 'DELETE',
    }
    fetch(url, httpHeaders)
        .then(() => loadTasksHandler())
        .catch(handleError)
}