function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'
    const stopIdInput = document.getElementById('stopId');
    const busStopResult = document.getElementById('stopName');
    const busesInput = document.getElementById('buses');

    busesInput.innerHTML = '';
    fetch(BASE_URL + stopIdInput.value)
        .then((res) => res.json())
        .then((busInfo) => {
            const{name, buses} = busInfo;
            busStopResult.textContent = name;
            for (const busId in buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`;
                busesInput.appendChild(li)
            }
        })
        .catch((err) => {
            busStopResult.textContent = 'Error'
        })
    

}