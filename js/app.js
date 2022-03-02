const API_KEY = `2f38b9e832506af6e7bae2f11ebd74bb`;

const searchWeather = () => {

    const city = document.getElementById("input-field").value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

        document.getElementById("input-field").value = '';
}
