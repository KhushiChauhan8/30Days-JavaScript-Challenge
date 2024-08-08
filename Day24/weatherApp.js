const weatherIcons = {
    'clear sky': '☀️',
    'few clouds': '🌤️',
    'scattered clouds': '☁️',
    'broken clouds': '☁️',
    'shower rain': '🌧️',
    'rain': '🌧️',
    'thunderstorm': '⛈️',
    'snow': '❄️',
    'mist': '🌫️',
    'haze': '🌫️',
    'light rain': '🌧️'
};

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    const apiKey = 'bc3f7327a953a8f479002936990124aa';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Current Weather:', data);
            const cityName = data.name;
            const weatherCondition = data.weather[0].description;
            const temperature = data.main.temp;
            const icon = weatherIcons[weatherCondition] || '❓';

            document.getElementById('city-name').innerText = cityName;
            document.getElementById('weather-condition').innerText = `${icon} ${weatherCondition}`;
            document.getElementById('temperature').innerText = `${temperature}°C`;
        })
        .catch(error => {
            console.log('Error:', error);
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            console.log('5-Day Forecast:', data);
            const forecastContainer = document.querySelector('.forecast');
            forecastContainer.innerHTML = '';

            data.list.forEach((item, index) => {
                if (index % 8 === 0) {  // The API provides data every 3 hours, so 8 data points = 1 day
                    const day = new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
                    const temp = item.main.temp;
                    const condition = item.weather[0].description;
                    const icon = weatherIcons[condition] || '❓';

                    const forecastElement = document.createElement('div');
                    forecastElement.className = 'forecast-day';
                    forecastElement.innerHTML = `<h3>${day}</h3><p>${temp}°C</p><p>${icon} ${condition}</p>`;
                    forecastContainer.appendChild(forecastElement);
                }
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
});

