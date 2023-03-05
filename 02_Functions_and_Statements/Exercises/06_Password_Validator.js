// FIRST VAR

// function passwordValidator(string) {
//     let result = [];
//     if (isLengthValid(string) && areOnlyLettersAndDigits(string) && areTwoDigits(string)) {
//         result.push('Password is valid');
//     } else {
//         if (!isLengthValid(string)) {
//             result.push('Password must be between 6 and 10 characters');
//         } if (!areOnlyLettersAndDigits(string)) {
//             result.push('Password must consist only of letters and digits');
//         } if (!areTwoDigits(string)) {
//             result.push('Password must have at least 2 digits');
//         }
//     }
//     console.log(result.join('\n'));

//     function isLengthValid(input) {
//         if (input.length >= 6 && input.length <= 10){
//             return true;
//         }
//         return false;
//     }
    
//     function areOnlyLettersAndDigits(input){
//         if (input.match(/^[A-Za-z0-9]*$/)) {
//             return true
//         }
//         return false
//     }
    
//     function areTwoDigits(input) {
//         if (/[0-9]/.test(input)) {
//             return true
//         }
//         return false
//     }
// }

// SECOND VAR

function passwordValidator(password) {
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
    const hasOnlyLetterAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
    const hasAtLeastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

    let passIsValid = true;
    if (!isValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        passIsValid = false;
    }

    if (!hasOnlyLetterAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
        passIsValid = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        passIsValid = false;
    }

    if (passIsValid) {
        console.log('Password is valid')
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');