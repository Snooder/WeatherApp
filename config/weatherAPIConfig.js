const functions = require('firebase-functions');

// Storing the WeatherAPI key in Firebase functions config
const weatherAPIKey = functions.config().weather?.api_key;

module.exports = weatherAPIKey;
