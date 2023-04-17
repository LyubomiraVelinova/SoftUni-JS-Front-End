window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    gender: document.getElementById('genderSelect'),
    dishDescription: document.getElementById('task'),
  }

  const othersDOMSelectors = {
    submitBtn: document.getElementById('form-btn'),
    inProgressContainer: document.getElementById('in-progress'),
    counter: document.getElementById('progress-count'),
    finished: document.getElementById('finished'),
    clearBtn: document.getElementById('clear-btn'),
  }

  let inputsContainer = {};
  othersDOMSelectors.submitBtn.addEventListener('click', submittingDishHandler);
  othersDOMSelectors.clearBtn.addEventListener('click', clearPostsHandler);

  let counter = 0;
  function submittingDishHandler() {
    const allFieldsHaveValue = Object.values(inputDOMSelectors)
      .every((input) => input.value !== '');
    if (!allFieldsHaveValue || inputDOMSelectors.age.value <= 0) {
      console.log('Error!');
      return;
    }

    counter++;
    const { firstName, lastName, age, gender, dishDescription } = inputDOMSelectors;

    const li = createElement('li', othersDOMSelectors.inProgressContainer, ['each-line']);
    const article = createElement('article', li);
    createElement('h4', article, null, `${firstName.value} ${lastName.value}`);
    createElement('p', article, null, `${gender.value}, ${age.value}`);
    createElement('p', article, null, `Dish description: ${dishDescription.value}`);
    const editBtn = createElement('button', li, ['edit-btn'], 'Edit');
    editBtn.addEventListener('click', editHandler);
    const completeBtn = createElement('button', li, ['complete-btn'], 'Mark as complete');
    completeBtn.addEventListener('click', completeHandler);

    othersDOMSelectors.counter.textContent = counter;

    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = '';
    }
  }

  function editHandler(event) {
    const currentLi = event.currentTarget.parentNode;
    const currentArticle = currentLi.children[0];
    const [currentFirstName, currentLastName] = currentArticle.children[0].textContent.split(' ');
    const [gender, age] = currentArticle.children[1].textContent.split(', ');
    const [_text, ...descriptionArr] = currentArticle.children[2].textContent.split(': ');
    const description = descriptionArr.join(': ');
    inputsContainer = {
      firstName: currentFirstName,
      lastName: currentLastName,
      age: age,
      gender: gender,
      dishDescription: description,
    }
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = inputsContainer[key];
    }

    currentLi.remove();
    counter --;
    othersDOMSelectors.counter.textContent = counter;
  }

  function completeHandler() {
    const currentLi = this.parentNode;
    const currentEditBtn = currentLi.children[1];
    currentEditBtn.remove();
    const currentCompleteBtn = currentLi.children[1];
    currentCompleteBtn.remove();
    othersDOMSelectors.finished.appendChild(currentLi);
    counter --;
    othersDOMSelectors.counter.textContent = counter;
  }

  function clearPostsHandler() {
    othersDOMSelectors.finished.textContent = '';
  }

  function createElement(type, parent, classes, content, id, attributes, isInnerHtml) {
    const htmlElement = document.createElement(type);

    if (content && isInnerHtml) {
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
    if (parent) {
      parent.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
