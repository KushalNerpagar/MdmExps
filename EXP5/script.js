const apiKey = "234d2e9c01063ddc7ba5f21d796244d1"; 
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');
    if (!city) {
        resultDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        resultDiv.innerHTML = "<p>Fetching weather...</p>";       
        const response = await fetch(url);       
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        resultDiv.innerHTML = `
            <div class="city-name">${data.name}, ${data.sys.country}</div>
            <div class="temp">${Math.round(data.main.temp)}°C</div>
            <div class="desc">${data.weather[0].description}</div>
            <div class="details">
                <div>
                    <small>Humidity</small>
                    <p>${data.main.humidity}%</p>
                </div>
                <div>
                    <small>Wind</small>
                    <p>${data.wind.speed} m/s</p>
                </div>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: #ffcccc;">Error: ${error.message}</p>`;
    }
}