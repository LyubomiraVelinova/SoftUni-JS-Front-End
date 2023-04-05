window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    console.log(addBtn)
    const allHitsContainer = document.querySelector('#all-hits > div');

    addBtn.addEventListener('click', songsCollectionHandler);

    const inputDOMSelectors = {
        genreInput: document.getElementById('genre'),
        nameInput: document.getElementById('name'),
        authorInput: document.getElementById('author'),
        dateInput: document.getElementById('date'),
    }
    // const allFieldsHaveValue = Object.values(inputDOMSelectors)
    //     .every((input) => input.value !== null);
    // console.log(Object.values(inputDOMSelectors))
    // if (!allFieldsHaveValue) {
    //     console.log('Empty field');
    //     return;
    // }

    function songsCollectionHandler() {
        console.log('hjy')
    //     const content = `
    //     <img src = "./static/img/img.png">
    //     <h2>Genre: ${inputDOMSelectors[genreInput].value}</h2>
    //     <h2>Name: ${inputDOMSelectors[nameInput].value}</h2>
    //     <h2>Author: ${inputDOMSelectors[authorInput].value}</h2>
    //     <h3>Date: ${inputDOMSelectors[dateInput].value}</h3>
    // `
        const hitsInfoContainer = document.createElement('div');
        hitsInfoContainer.classList.add('hits-info');

        // const hitsInfoContainer = createElement('div', allHitsContainer, content, ['hits-info']);
        hitsInfoContainer.innerHTML = `
            <img src = "./static/img/img.png">
            <h2>Genre: ${inputDOMSelectors[genreInput].value}</h2>
            <h2>Name: ${inputDOMSelectors[nameInput].value}</h2>
            <h2>Author: ${inputDOMSelectors[authorInput].value}</h2>
            <h3>Date: ${inputDOMSelectors[dateInput].value}</h3>
        `
        console.log(hitsInfoContainer)
        allHitsContainer.appendChild(hitsInfoContainer);
        // const img = document.createElement('img');
        // img.setAttribute('src', '06_Exam_Preparation\02.Music Site\Resources\static\img\img.png');

    }

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {

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