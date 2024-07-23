const {db} = require("../config/firebaseConfig");
const redisClient = require("../config/redisConfig");
const fetchWeatherFromAPI = require("../firebase/functions/fetchWeatherData");
const {WeatherData} = require("../models");

// Get weather data for a location
async function getWeatherData(location) {
  // Check Redis cache first
  const cachedData = await new Promise((resolve, reject) => {
    redisClient.get(location, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  // Fetch from PostgreSQL if not in cache
  const weatherRecord = await WeatherData.findOne({where: {location}});
  if (weatherRecord) {
    const weatherData = weatherRecord.toJSON();
    // Update Redis cache
    redisClient.set(location, JSON.stringify(weatherData), "EX", 3600); // Cache for 1 hour
    return weatherData;
  }

  // Fetch from external API if not in PostgreSQL
  const weatherData = await fetchWeatherFromAPI(location);
  await db.collection("weatherData").doc(location).set(weatherData);
  redisClient.set(location, JSON.stringify(weatherData), "EX", 3600); // Cache for 1 hour

  // Save to PostgreSQL
  await WeatherData.create({
    location: weatherData.location,
    temperature: weatherData.temperature,
    precipitation_probability: weatherData.precipitationProbability,
    humidity: weatherData.humidity,
    wind_speed: weatherData.windSpeed,
    fetched_at: weatherData.fetched_at,
  });

  return weatherData;
}

module.exports = {
  getWeatherData,
};
