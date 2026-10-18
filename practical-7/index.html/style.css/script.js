let cityInput =
document.getElementById("cityInput");
let searchButton =
document.getElementById("searchButton");
let weatherResult =
document.getElementById("weatherResult");
searchButton.addEventListener("click", function()
{
let city =
cityInput.value.trim();
if(city == "")
{
weatherResult.innerHTML =
"<p>Please enter a city.</p>";
return;
}
getWeather(city);
});
async function getWeather(city)
{
weatherResult.innerHTML =
"<p>Loading...</p>";
try
{
let geoUrl =
"https://geocoding-api.open-meteo.com/v1/search?name="
+ encodeURIComponent(city)
+ "&count=1";
let geoResponse =
await fetch(geoUrl);
  if(!geoResponse.ok)
{
throw new Error("Geocoding request failed");
}
let geoData =
await geoResponse.json();
if(!geoData.results)
{
weatherResult.innerHTML =
"<p>City not found.</p>";
return;
}
let location =
geoData.results[0];
let latitude =
location.latitude;
let longitude =
location.longitude;
let weatherUrl =
"https://api.open-meteo.com/v1/forecast"
+ "?latitude=" + latitude
+ "&longitude=" + longitude
+
"&current=temperature_2m,relative_humidity_2m,weather_code,win
d_speed_10m";
let weatherResponse =
await fetch(weatherUrl);
if(!weatherResponse.ok)
{
throw new Error("Weather request failed");
}
  let weatherData =
await weatherResponse.json();
let current =
weatherData.current;
let temperature =
current.temperature_2m;
let humidity =
current.relative_humidity_2m;
let windSpeed =
current.wind_speed_10m;
let weatherCode =
current.weather_code;
weatherResult.innerHTML =
"<h2>" + location.name + "</h2>" +
"<p>Country: "
+ location.country + "</p>" +
"<p>Temperature: "
+ temperature + " °C</p>" +
"<p>Humidity: "
+ humidity + " %</p>" +
"<p>Wind Speed: "
+ windSpeed + " km/h</p>" +
"<p>Weather Code: "
+ weatherCode + "</p>";
}
catch(error)
{
weatherResult.innerHTML =
"<p>Unable to fetch weather data.</p>";
console.log(error);
}
}
