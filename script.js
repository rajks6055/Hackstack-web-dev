let temp = document.querySelector(".temperature");
let windSpeed = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let cityname = document.querySelector(".location");
let weather = document.querySelector(".weather");
let icon = document.querySelector(".weather-icon");
let toggleBtn = document.querySelector(".tempconv"); 

let isCelsius = true;
let tempC = 0;
let tempF = 0;

async function getweather(city) {
  const url = `http://api.weatherapi.com/v1/current.json?key=7c8aa18e50964955858193309251106&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    cityname.innerHTML = city + " , " + result.location.country;
    weather.innerHTML = result.current.condition.text
    tempC = result.current.temp_c;
    tempF = result.current.temp_f;
    temp.innerHTML = `${tempC} °C`;
    icon.src = "https:" + result.current.condition.icon;
    humidity.innerHTML = "Humidity: " + result.current.humidity + " %";
    pressure.innerHTML = "Pressure: " + result.current.pressure_mb + " mb";
    windSpeed.innerHTML = "Wind: " + result.current.wind_mph + " m/s";
  } catch (error) {
    console.error(error);
  }
}

document.querySelector(".search").addEventListener("click", (e) => {
  e.preventDefault();
  const city = document.querySelector("input").value;
  getweather(city);
});
toggleBtn.addEventListener("click", () => {
  isCelsius = !isCelsius;
  if (isCelsius) {
    temp.innerHTML = `${tempC} °C`;
    toggleBtn.innerText = "°C / °F";
  } else {
    temp.innerHTML = `${tempF} °F`;
    toggleBtn.innerText = "°F / °C";
  }
});
let container=document.querySelector(".container");
const mode = document.querySelector(".day_night");
mode.addEventListener('click', () => {
	container.classList.toggle('night');
	container.classList.toggle('day');
});

getweather("delhi");
