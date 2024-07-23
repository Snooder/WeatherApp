const fetch = require("node-fetch");
const weatherAPIKey = require("../../config/weatherAPIConfig");

async function fetchWeatherFromAPI(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${location}`);
  const data = await response.json();

  return {
    location: location,
    temperature: data.current.temp_f,
    precipitationProbability: data.current.precip_mm,
    humidity: data.current.humidity,
    windSpeed: data.current.wind_mph,
    fetched_at: new Date().toISOString(),
  };
}

module.exports = fetchWeatherFromAPI;
