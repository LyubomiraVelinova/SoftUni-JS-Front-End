async function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations'
    const CURRENT_CONDITION_BASE_URL = 'http://localhost:3030/jsonstore/forecaster/today/'
    const THREE_DAY_FORECAST_BASE_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'

    const input = document.getElementById('location');
    const button = document.getElementById('submit');
    const divForecast = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    let locationName = null;
    let locationCode = null;

    const weatherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176',
    }
    button.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            for (const { name, code } of data) {
                if (name === input.value) {
                    locationCode = code;
                    locationName = name;
                }
            }
            if (locationName !== null) {
                try {
                    divForecast.style.display = 'block';
                    const currentWeather = await fetch(`${CURRENT_CONDITION_BASE_URL}${locationCode}`);
                    const currentDataWeather = await currentWeather.json();
                    const weatherIconCode = currentDataWeather.forecast.condition;
                    const iconCode = weatherSymbols[weatherIconCode];
                    currentDiv.innerHTML = `
                        <div class="forecasts">
                            <span class="condition symbol">${iconCode}</span>
                            <span class="condition">
                                <span class="forecast-data">${currentDataWeather.name}</span>
                                <span class="forecast-data">${currentDataWeather.forecast.low}${weatherSymbols['Degrees']}/${currentDataWeather.forecast.high}${weatherSymbols['Degrees']}</span>
                                <span class="forecast-data">${weatherIconCode}</span>
                            </span>
                        </div>
                    `;

                    const upcomingWeather = await fetch(`${THREE_DAY_FORECAST_BASE_URL}${locationCode}`);
                    const upcomingDataWeather = await upcomingWeather.json();
                    const forecastInfoDiv = document.createElement('div');
                    forecastInfoDiv.classList.add('forecast-info');

                    for (const data of upcomingDataWeather.forecast) {
                        const weatherIcon = weatherSymbols[data.condition];
                        forecastInfoDiv.innerHTML += `
                            <span class="upcoming">
                                <span class="symbol">${weatherIcon}</span>
                                <span class="forecast-data">${data.low}${weatherSymbols['Degrees']}/${data.high}${weatherSymbols['Degrees']}</span>
                                <span class="forecast-data">${data.condition}</span>
                            </span>
                        `;
                        upcomingDiv.appendChild(forecastInfoDiv);
                    }
                    
                } catch (e) {
                }
            }
        } catch (e) { }
    });
}

attachEvents();