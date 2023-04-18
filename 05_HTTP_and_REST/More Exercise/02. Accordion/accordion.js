function solution() {
    const MAIN_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const DETAILED_URL = 'http://localhost:3030/jsonstore/advanced/articles/details/'
    const main = document.getElementById('main');
    const clickCounter = 0;

    fetch(MAIN_URL)
        .then((res) => res.json())
        .then((data) => {
            for (const line of Object.values(data)) {
                const { _id, title } = line;

                const accordionDiv = document.createElement('div');
                accordionDiv.classList.add(['accordion']);
                const headDiv = document.createElement('div');
                headDiv.classList.add(['head']);
                const span = document.createElement('span');
                span.textContent = title;
                const button = document.createElement('button');
                button.classList.add(['button']);
                button.id = _id;
                button.textContent = 'More';
                const extraDiv = document.createElement('div');
                extraDiv.classList.add(['extra']);
                extraDiv.style.display = 'none'

                headDiv.appendChild(span);
                headDiv.appendChild(button);
                accordionDiv.appendChild(headDiv);
                accordionDiv.appendChild(extraDiv);
                main.appendChild(accordionDiv);

                button.addEventListener('click', moreOrLessInfoHandler);
                button.onclick = function () {
                    clickCounter ++;
                }
            }
        })
    
    function moreOrLessInfoHandler(event) {
        const currentBtn = event.currentTarget;
        const currentExtraDiv = currentBtn.parentNode.parentNode.children[1];
        if (currentBtn.textContent === 'More') {
            currentBtn.textContent = 'Less';
            const neededURL = DETAILED_URL + currentBtn.id;
            currentExtraDiv.style.display = 'block';
            const p = document.createElement('p');
            if (clickCounter === 0) {
                fetch(neededURL)
                .then((res) => res.json())
                .then((data) => {
                    const { _id, title, content } = data;
                    p.textContent = content;
                    currentExtraDiv.appendChild(p);
                })
            }

        } else if (currentBtn.textContent === 'Less') {
            currentBtn.textContent = 'More';
            currentExtraDiv.style.display = 'none';
        }
    }
}




solution();

