// function toggle() {
//     const text = document.getElementById('extra');
//     const button = Array.from(document.getElementsByClassName('button'));
//     let count = 0;

//     button[0].onclick = function() {
//         count ++ ;
//         if (count % 2 == 1) {
//             text.style.display = 'block';
//             button[0].textContent = 'Less';
//         } else {
//             text.style.display = 'none';
//             button[0].textContent = 'More ';
//         }
//     }   
// }

function toggle() {
    const text = document.getElementById('extra');
    const button = Array.from(document.getElementsByClassName('button'))[0];

    if (text.style.display === 'none') {
        text.style.display = 'block';
        button.textContent = 'Less';
    } else {
        text.style.display = 'none';
        button.textContent = 'More';
    }
}