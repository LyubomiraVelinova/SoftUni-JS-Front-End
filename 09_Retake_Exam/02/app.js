window.addEventListener("load", solve);

function solve() {
    const inputDOMSelectors = {
        title: document.getElementById('task-title'),
        category: document.getElementById('task-category'),
        content: document.getElementById('task-content'),
    }

    const publishBtn = document.getElementById('publish-btn');
    const reviewContainer = document.getElementById('review-list');
    const uploadedTaskContainer = document.getElementById('published-list');

    publishBtn.addEventListener('click', publishHandler);

    function publishHandler() {
        const validInputs = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!validInputs) {
            console.log('Invalid input/inputs');
            return
        }
        const { title, category, content } = inputDOMSelectors;

        const li = document.createElement('li');
        li.classList.add(['rpost']);
        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        h4.textContent = title.value;
        article.appendChild(h4);
        const firsPar = document.createElement('p');
        firsPar.textContent = `Category: ${category.value}`;
        article.appendChild(firsPar);
        const secondPar = document.createElement('p');
        secondPar.textContent = `Content: ${content.value}`;
        article.appendChild(secondPar);
        li.appendChild(article);
        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);
        const postBtn = document.createElement('button');
        postBtn.classList.add('action-btn', 'post');
        postBtn.textContent = 'Post';
        li.appendChild(postBtn);
        reviewContainer.appendChild(li);

        // Clear inputs
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = '';
        }

        editBtn.addEventListener('click', editInformationHandler);
        postBtn.addEventListener('click', postInformationHandler);
    }

    function editInformationHandler(event) {
        const currentLi = event.currentTarget.parentNode;
        const [h4, firstPar, secondPar] = Array.from(currentLi.children[0].children);
        const categoryValueLength = firstPar.textContent.length;
        const contentValueLength = secondPar.textContent.length;
        inputDOMSelectors['title'].value = h4.textContent;
        inputDOMSelectors['category'].value = firstPar.textContent.substring(10, categoryValueLength);
        inputDOMSelectors['content'].value = secondPar.textContent.substring(9, contentValueLength);
        currentLi.remove();
    }

    function postInformationHandler() {
        const currentLi = this.parentNode;
        const currentEditBtn = currentLi.children[1];
        this.remove();
        currentEditBtn.remove()
        uploadedTaskContainer.appendChild(currentLi);

    }
}