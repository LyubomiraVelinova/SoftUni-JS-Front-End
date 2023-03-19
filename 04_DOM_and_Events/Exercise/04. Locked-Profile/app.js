function lockedProfile() {
    const firstUserInfo = Array.from(document.getElementById('user1HiddenFields').children);
    const secondUserInfo = Array.from(document.getElementById('user2HiddenFields').children);
    const thirdUserInfo = Array.from(document.getElementById('user3HiddenFields').children);
    const allButtons = Array.from(document.querySelectorAll('#main > div > button'));
    

    console.log(firstUserInfo);
    console.log(secondUserInfo);
    console.log(thirdUserInfo);
    console.log(allButtons);
}