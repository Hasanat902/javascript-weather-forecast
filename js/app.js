const API_KEY = `2f38b9e832506af6e7bae2f11ebd74bb`;

const searchWeather = () => {

    const city = document.getElementById("input-field").value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))

        document.getElementById("input-field").value = '';
}

const getInnerText = (id, value) => {
    document.getElementById(id).innerText = value;
}

const displayWeather = temperature => {
    
    getInnerText("city", temperature.name);
    getInnerText("temp", temperature.main.temp);
    getInnerText("condition", temperature.weather[0].main);

    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute("src", url);
    console.log(temperature);
}