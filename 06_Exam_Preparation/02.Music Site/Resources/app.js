window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    const allHitsContainer = document.querySelector('#all-hits > div');
    const savedSongs = document.querySelector('#saved-hits > div');
    const totalLikes = document.querySelector('#total-likes > div > p');

    const inputDOMSelectors = {
        genreInput: document.getElementById('genre'),
        nameInput: document.getElementById('name'),
        authorInput: document.getElementById('author'),
        dateInput: document.getElementById('date'),
    }

    addBtn.addEventListener('click', songsCollectionHandler);
    let totalLikesCounter = 0;
    function songsCollectionHandler(event) {
        event.preventDefault();
        // VALIDATION
        const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!allFieldsHaveValue) {
            console.log('Empty field');
            return;
        }

        // DOM MANIPULATIONS
        const hitsInfoContainer = createElement('div', allHitsContainer, null, ['hits-info']);
        createElement('img', hitsInfoContainer, null, null, { src: './static/img/img.png' });
        createElement('h2', hitsInfoContainer, `Genre: ${inputDOMSelectors.genreInput.value}`);
        createElement('h2', hitsInfoContainer, `Name: ${inputDOMSelectors.nameInput.value}`);
        createElement('h2', hitsInfoContainer, `Author: ${inputDOMSelectors.authorInput.value}`);
        createElement('h3', hitsInfoContainer, `Date: ${inputDOMSelectors.dateInput.value}`);
        const saveBtn = createElement('button', hitsInfoContainer, `Save song`, ['save-btn']);
        saveBtn.addEventListener('click', savedSongHandler);
        const likeBtn = createElement('button', hitsInfoContainer, `Like song`, ['like-btn']);
        likeBtn.addEventListener('click', totalLikesHandler);
        const deleteBtn = createElement('button', hitsInfoContainer, `Delete`, ['delete-btn']);
        deleteBtn.addEventListener('click', deleteSongHandler);

        // DELETE INPUTS
        // function clearAllInputs() {
        //     Object.values(inputDOMSelectors)
        //     .forEach((input) => {
        //         input.value = '';
        //     })
        // }
        
        for (const input of Object.values(inputDOMSelectors)) {
            input.value = '';
        }

        function totalLikesHandler() {
            totalLikesCounter++;
            likeBtn.disabled = true
            totalLikes.textContent = `Total Likes: ${totalLikesCounter}`;
        }

        function savedSongHandler() {
            savedSongs.appendChild(hitsInfoContainer);
            saveBtn.remove();
            likeBtn.remove();
        }

        function deleteSongHandler(event) {
            const currentContainer = event.currentTarget.parentNode;
            currentContainer.remove();
        }
    }

    function createElement(type, parentNode, content, classes, attributes) {

        const htmlElement = document.createElement(type);

        if (content) {
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