function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
    const info = document.getElementById('info').children[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let nextBusId = 'depot';
    let currentBusStopName = '';
    function depart() {
        fetch(`${BASE_URL}${nextBusId}`)
            .then((res) => res.json())
            .then((data) => {
                currentBusStopName = data['name'];
                nextBusId = data['next'];
                info.textContent = `Next stop ${currentBusStopName}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch((err) => {
                info.textContent = `Error`;
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    async function arrive() {
        info.textContent = `Arriving at ${currentBusStopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();