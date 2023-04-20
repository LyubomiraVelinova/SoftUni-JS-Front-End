// UNFINISHED

function solve() {
    const LOGIN_URL = 'http://localhost:3030/users/login';
    
    const navBar = document.querySelector('#guest')
    const loginNavBtn = document.querySelector('#guest #login')
    const inputDOMSelectors = {
        emailInput: document.querySelector('#login > label:nth-child(1) > input[type=text]'),
        passwordInput: document.querySelector('#login > label:nth-child(2) > input[type=password]'),
    }
    const loginForm = document.getElementById('login');
    const loginErrorMsg = document.querySelector('#login > p');
    const loginBtn = document.querySelector('#login > button');
    loginBtn.addEventListener('click', loginHandler);

    let correctLogin = [];
    async function loginHandler() {
        const inputValues = Object.values(inputDOMSelectors)
            .every((input) => input !== '');
        if (!inputValues){
            loginErrorMsg.textContent = 'Login or password don\'t match';
            return
        }
        const [email, password] = Object.values(inputDOMSelectors);
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({email, password})
        }
        let data = await fetch(LOGIN_URL, httpHeaders);
        if (data.status !== 200) {
            correctLogin = [];
            const errorMsg = await data.json();
            loginErrorMsg.textContent = errorMsg.message;
            return;
        }
        data = await data.json();
        inputDOMSelectors.emailInput.textContent = data.email;
        loginForm.style.display = 'none';
    }
}

solve();