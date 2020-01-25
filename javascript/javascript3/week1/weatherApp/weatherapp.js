const input = document.getElementById("cityInput");
const button = document.getElementById("getData");
const h2 = document.getElementById("h2");
const cityName = document.getElementById("city");
const tempIs = document.getElementById("temp");
const iconIs = document.getElementById("icon");
const widIs = document.getElementById("wind");
const cloudIS = document.getElementById("cloud");
const humidityIS = document.getElementById("humidity");
const sunRise = document.getElementById("sun");
const sunSet = document.getElementById("sun2");
const mapIs = document.getElementById("map");
const myLocation = document.getElementById("currentposition");

// Fetch weather data from a city

const fetchData = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=e98e7072e623479ec1768bb33c07a28c`
  )
    .then(response => response.json())
    .then(data => {
      cityName.innerHTML = " City Name : " + data.name;

      tempIs.innerHTML =  " Temprature : " +  Math.floor(data.main.temp - 273.15) + "&#176" + " C ";

      let iconId = data.weather[0].icon;

      let img = (document.querySelector( "#img1" ).src = `http://openweathermap.org/img/w/${iconId}.png`);

      widIs.innerHTML = "wind speed : " + data.wind.speed + "m/s";

      cloudIS.innerHTML = "clouds : " + data.clouds.all;

      humidityIS.innerHTML = " Humidity : " + data.main.humidity + " % ";

      sunRise.innerHTML = " Sunrise : " + timeConverted(data.sys.sunrise);

      sunSet.innerHTML = " Sunset : " + timeConverted(data.sys.sunset);

      h2.innerText = " ";
    });
};

const run = () => {
  if (fetchData && input.value !== "") {
    h2.innerText = "Loding data . . . ";
  }

  const noValue = document.getElementById("needValue");

  if (input.value === "") {
    noValue.innerHTML = "Please insert value";
  } else {
    fetchData();
  }
};

// Use my current position optional 

const getLocation = () => {
  const location = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e98e7072e623479ec1768bb33c07a28c`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);

        cityName.innerHTML = " City Name : " + data.name;

        tempIs.innerHTML =
          " Temprature : " +
          Math.floor(data.main.temp - 273.15) +
          "&#176" +
          " C ";

        let iconId = data.weather[0].icon;

        let img = (document.querySelector("#img1").src = `http://openweathermap.org/img/w/${iconId}.png`);

        humidityIS.innerHTML = " Humidity : " + data.main.humidity + " % ";
        h2.innerText = "";

        sunRise.innerHTML = " Sunrise : " + timeConverted(data.sys.sunrise);

        sunSet.innerHTML = " Sunset : " + timeConverted(data.sys.sunset);
      });
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  if (navigator.geolocation) {
    h2.innerText = "Loding data . . .";
    navigator.geolocation.getCurrentPosition(location);
  } else {
    error();
  }
};

const timeConverted = sec => {
const time = new Date(sec * 1000);

return time.toLocaleTimeString(navigator.language, {
    hour: "2-digit",

    minute: "2-digit"
  });
}; // convert seconds to hour and minuts to display


button.addEventListener("click", run);
myLocation.addEventListener("click", getLocation);
