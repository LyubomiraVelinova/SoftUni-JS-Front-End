function lockedProfile() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles/';
    const main = document.getElementById('main');
    showProfileInfo()

    function showProfileInfo() {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((profiles) => {
                for (const line of Object.values(profiles)) {
                    const firstDiv = createElement('div', main, null, ['profile']);
                    createElement('img',firstDiv, null, ['userIcon'], null, {src: './iconProfile2.png'});
                    createElement('label',firstDiv, 'Lock');
                    createElement('input',firstDiv, null, null, null, {type: 'radio', name: 'user1Locked', value: 'lock', checked: true});
                    createElement('label',firstDiv, 'Unlock');
                    createElement('input',firstDiv, null, null, null, {type: 'radio', name: 'user1Locked', value: 'unlock'});
                    createElement('br', firstDiv);
                    createElement('hr', firstDiv);
                    createElement('label',firstDiv, 'Username');
                    createElement('input',firstDiv, null, null, null, {type: 'text', name: 'user1Username', value: '', disabled: 'readonly'});
                    const secondDiv = createElement('div', firstDiv, null,null, 'user1HiddenFields');
                    createElement('hr', secondDiv);
                    const emailLabel = createElement('label',secondDiv, 'Email:');
                    emailLabel.display = 'none';
                    const emailField = createElement('input',secondDiv, null, null, null, {type: 'email', name: 'user1Email', value: '', disabled: 'readonly'});
                    emailField.display = 'none';
                    const ageLabel = createElement('label',secondDiv, 'Age:');
                    ageLabel.display = 'none';
                    const ageField = createElement('input',secondDiv, null, null, null, {type: 'text', name: 'user1Age', value: '', disabled: 'readonly'});
                    ageField.display = 'none';
                    const btn = createElement('button', firstDiv, 'Show more');
                }
                console.log(Object.values(data))
            })
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