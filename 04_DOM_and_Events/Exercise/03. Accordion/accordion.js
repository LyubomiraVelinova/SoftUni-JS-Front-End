function toggle() {
    const text = document.getElementById('extra');
    const button = Array.from(document.getElementsByClassName('button'));
    let count = 0;

    button[0].onclick = function() {
        count ++ ;
        if (count % 2 == 1) {
            text.style.display = 'block';
            button[0].textContent = 'Less';
        } else {
            text.style.display = 'none';
            button[0].textContent = 'More';
        }
    }   
}