function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const textArea = document.getElementById('messages');
    const nameInput = document.querySelector('#controls > div:nth-child(1) > input[type=text]');
    const messageInput = document.querySelector('#controls > div:nth-child(2) > input[type=text]');

    sendBtn.addEventListener('click', sendInfo);
    refreshBtn.addEventListener('click', refreshInfo);

    function sendInfo() {
        let authorName = nameInput.value;
        let msgText = messageInput.value;

        fetch(BASE_URL, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorName,
                content: msgText,
            })
        })
    }

    function refreshInfo() {
        textArea.textContent = '';
        let result = [];
        fetch(BASE_URL).then((res) => res.json()).then((data) => {
            for (const key in data) {
                let author = data[key].author;
                let message = data[key].content;
                result.push(`${author}: ${message}`)
            }
            textArea.value = result.join('\n');
        })
        nameInput.value = '';
        messageInput.value = '';
    }
}

attachEvents();