

const apiKey = "2e261351bb264f1e646f8071d8b7f41e"; 

document.getElementById("search-btn").addEventListener("click", function () {
    const city = document.getElementById("city-input").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert("City not found!");
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function displayWeather(data) {
    document.getElementById("city-name").textContent = `City: ${data.name}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById("weather-condition").textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
