function passwordValidator(string) {
    let result = [];
    if (isLengthValid(string) && areOnlyLettersAndDigits(string) && areTwoDigits(string)) {
        result.push('Password is valid');
    } else {
        if (!isLengthValid(string)) {
            result.push('Password must be between 6 and 10 characters');
        } if (!areOnlyLettersAndDigits(string)) {
            result.push('Password must consist only of letters and digits');
        } if (!areTwoDigits(string)) {
            result.push('Password must have at least 2 digits');
        }
    }
    console.log(result.join('\n'));

    function isLengthValid(input) {
        if (input.length >= 6 && input.length <= 10){
            return true;
        }
        return false;
    }
    
    function areOnlyLettersAndDigits(input){
        if (input.match(/^[A-Za-z0-9]*$/)) {
            return true
        }
        return false
    }
    
    function areTwoDigits(input) {
        if (/[0-9]/.test(input)) {
            return true
        }
        return false
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');