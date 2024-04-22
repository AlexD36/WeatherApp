// script.js

const apiKey = 'f6ac7537fba7bd4b99b43097e03b10ca';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

window.addEventListener('load', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherByCoordinates(position.coords.latitude, position.coords.longitude);
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});

async function getWeatherByCoordinates(latitude, longitude) {
    const url = `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    document.getElementById('location').textContent = `Location: ${data.name}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
}
