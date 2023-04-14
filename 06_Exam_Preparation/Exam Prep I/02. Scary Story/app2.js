window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
  }

  const othersDOMSelectors = {
    ulPreviewList: document.getElementById('preview-list'),
    publishBtn: document.getElementById('form-btn'),
    mainContainer: document.getElementById('main'),
  }

  const saveBtn = createElement('button', null, 'Save Story', ['save-btn']);
  const editBtn = createElement('button', null, 'Edit Story', ['edit-btn']);
  const deleteBtn = createElement('button', null, 'Delete Story', ['delete-btn']);

  othersDOMSelectors.publishBtn.addEventListener('click', storyInfoHandler);
  saveBtn.addEventListener('click', saveStoryHandler);
  editBtn.addEventListener('click', editStoryHandler);
  deleteBtn.addEventListener('click', deleteStoryHandler);

  let inputsContainer = {
    firstName: null,
    lastName: null,
    age: null,
    title: null,
    genre: null,
    story: null,
  };

  function storyInfoHandler() {
    // VALIDATE ALL FIELD 
    const allFieldsHaveValue = Object.values(inputDOMSelectors)
      .every((input) => input.value !== '');
    if (!allFieldsHaveValue) {
      console.log('Empty field');
      return;
    }

    const li = createElement('li', othersDOMSelectors.ulPreviewList, null, ['story-info']);
    const article = createElement('article', li);
    createElement('h4', article, `Name: ${inputsContainer.firstName} ${inputsContainer.lastName}`);
    createElement('p', article, `Age: ${inputsContainer.age}`);
    createElement('p', article, `Title: ${inputsContainer.title}`);
    createElement('p', article, `Genre: ${inputsContainer.genre}`);
    createElement('p', article, `${inputsContainer.story}`);

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    for (const key in inputDOMSelectors) {
      inputsContainer[key] = inputDOMSelectors[key].value;
    }

    // CLEAR ALL INPUTS
    Object.values(inputDOMSelectors)
      .forEach((input) => input.value = '');

    othersDOMSelectors.publishBtn.disabled = true;
  }

  function editStoryHandler() {
    inputDOMSelectors.firstName.value = inputsContainer.firstName;
    inputDOMSelectors.lastName.value = inputsContainer.lastName;
    inputDOMSelectors.age.value = inputsContainer.age;
    inputDOMSelectors.title.value = inputsContainer.storyTitle;
    inputDOMSelectors.story.value = inputsContainer.story;
    othersDOMSelectors.publishBtn.disabled = false;
    othersDOMSelectors.ulPreviewList.innerHTML = '<h3>Preview</h3>';
  }

  function saveStoryHandler() {
    othersDOMSelectors.mainContainer.innerHTML = '<h1>Your scary story is saved!</h1>';
  }

  function deleteStoryHandler() {
    othersDOMSelectors.ulPreviewList.innerHTML = '<h3>Preview</h3>';
    othersDOMSelectors.publishBtn.disabled = false;
  }

  function createElement(type, parentNode, content, classes) {

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

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;

  }
}


