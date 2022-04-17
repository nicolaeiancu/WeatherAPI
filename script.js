let weather = {
    "APIkey": "66609c94175c3b18baa110255cd79f28",
    fetchWeather: function(city) {
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="
    +city
    +"&units=metric&appid="
    +this.APIkey
    )
    .then((response) => {
        if (!response.ok) {
          alert("Location not found.");
          throw new Error("Location not found.");
        }
        return response.json();
      })
    .then((data) => this.DisplayWeather(data));
    },
	
	
    DisplayWeather: function(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, pressure } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description"). innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".pressure").innerText = "Pressure: " + pressure +" hPa";
    document.querySelector(".wind").innerText = "Wind speed: " +speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1920x1080/?" + name + "')";

    },
    search:function()
    {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function()
{
weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

  

weather.fetchWeather("Maribor");
