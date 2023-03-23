// function validate() {
//     const input = document.getElementById('email');
//     input.addEventListener('click', helper);
//     function helper() {
//         let inputArr = input.value.split('');
//         let pattern = '';
//         let isValid = false;
//         inputArr.forEach(element => {
//             if (/^[a-z0-9]*$/.test(element)) {
//                 pattern += element;
//             } else if (element === '@' && pattern !== '') {
//                 pattern = ''
//             } else if 
//         });
//         input.value =''
//     }

//     // let isValid = false;
//     // if (!isValid) {
//     //     input.classList.add('error');
//     // }
// }

// function helper(inputArr) {
//     let isValid = false;

//     if (validateName(inputArr)) {
//         let newArr = validateName(inputArr);
//         if (validateAtSign(newArr)) {
//             newArr = validateAtSign(newArr);
//             if (validateName(newArr)) {
//                 newArr = validateName(newArr);
//                 if (validateDot(newArr)) {
//                     newArr = validateDot(newArr);
//                     if (validateName(newArr)) {
//                         isValid = true;
//                     }
//                 }
//             }
//         }
//     }
//     return isValid
// }

// function validateName(array) {
//     let pattern = '';
//     while (array.length > 0) {
//         let char = array.shift();
//         if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
//             pattern += char;
//         } else {
//             array.unshift(char);
//             break
//         }
//     }
//     if (pattern !== '') {
//         return array;
//     } else {
//         return false;
//     }
// }

// function validateAtSign(array) {
//     let char = array.shift();
//     if (char === '@') {
//         return array;
//     } else {
//         return false;
//     }
// }

// function validateDot(array) {
//     let char = array.shift();
//     if (char === '.') {
//         return array;
//     } else {
//         array.unshift(char);
//         return false;
//     }
// }

// input = ('nakov@softuni.org').split('');
// validateName(input[0]);
// validateName(input[1]);


function validate() {
    const email = document.querySelector('#email');

    function validateEmail() {
        const output = email.value.match(/^[a-z]+@[a-z]+\.[a-z]+$/)
        if (!output) {
            email.classList.add('error');
        } else {
            email.classList.remove('error');
            email.value = ''
        }
    }
    email.addEventListener('change', validateEmail);
}