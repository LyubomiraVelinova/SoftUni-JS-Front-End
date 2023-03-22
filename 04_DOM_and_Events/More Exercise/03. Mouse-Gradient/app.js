function attachGradientEvents() {
    const gradientBox = document.getElementById('gradient-box');
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradientBox.addEventListener('mouseover', controlMovement);

    function controlMovement(){
        console.log(gradient.style.background)
    }
}