function lockedProfile() {
    const allButtons = Array.from(document.querySelectorAll('#main > div > button'));

    allButtons.forEach(button => {
        button.addEventListener('click', unlockInfo);
    });

    function unlockInfo(e) {
        const radioButton = Array.from(e.target.parentElement.children)[2];
        const userInfo = Array.from(e.target.parentElement.children)[9];
        // this === e.currentTarget;
        const currentBtn = e.target; 
        
        if (!radioButton.checked && currentBtn.textContent === 'Show more') {
            userInfo.style.display = 'block';
            currentBtn.textContent = 'Hide it';
        } else if (!radioButton.checked && currentBtn.textContent === 'Hide it') {
            userInfo.style.display = 'none';
            currentBtn.textContent = 'Show more';
        }
    }
}