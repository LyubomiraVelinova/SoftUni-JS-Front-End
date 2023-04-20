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

    // SECOND STEP - Convert object into array and check wether every input is not empty(this should be in the function with some event)- this should be in click event function
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

// OBJECT DESTRUCTING
const inputDOMSelectors = {
    genreInput: 'genre',
    nameInput: 'name',
    authorInput: 'author',
    dateInput: 'date',
}
const { genreInput, nameInput, authorInput, dateInput } = inputDOMSelectors;
// console.log(genreInput)  --> //genre
// console.log(genreInput)  --> //name
// console.log(genreInput)  --> //author
// console.log(genreInput)  --> //date

// CLEAR ALL INPUTS
function clearAllInputs() {
    Object.values(inputDOMSelectors)
        .forEach((input) => {
            input.value = '';
        })
}

// EVENT PREVENT DEFAULT
if (event) {
    event.preventDefault();
}

// PATCH EXAMPLE
const httpHeaders = {
    method: 'PATCH',
    body: JSON.stringify({ name: currentName })
}
fetch(url, httpHeaders)
    .then(() => loadTasksHandler(event))
    .catch((err) => console.error(err))

// How to save items from GEt request outside function
const currentProducts = [];
function productsHandler() {
    fetch(BASE_URL)
        .then((res) => res.json())
        .then((allProductsRes) => {
            currentProducts = Object.values(allProductsRes);
            for (const { product, count, price, _id } of currentProducts) {
                pass
            }
        })
}

// DOM task with form which has to be updated- collecting all inputs in outer object
const inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
}

let inputsContainer = {
    firstName: null,
    lastName: null,
    age: null,
    title: null,
    genre: null,
    story: null,
};

for (const key in inputDOMSelectors) {
    inputsContainer[key] = inputDOMSelectors[key].value;
}

// OR
const { firstName, lastName, age, title, genre, story } = inputDOMSelectors;
inputsContainer = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    title: title.value,
    genre: genre.value,
    story: story.value,
}

inputDOMSelectors.firstName.value = inputsContainer.firstName;
inputDOMSelectors.lastName.value = inputsContainer.lastName;
inputDOMSelectors.age.value = inputsContainer.age;
inputDOMSelectors.title.value = inputsContainer.storyTitle;
inputDOMSelectors.story.value = inputsContainer.story;

// FORM RESET
const form = document.getElementById('form');
form.reset();