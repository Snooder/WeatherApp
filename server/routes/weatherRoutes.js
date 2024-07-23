const express = require('express');
const { getWeatherData } = require('../../services/weatherService');
const router = express.Router();

// Get weather data for location
router.get('/:location', async (req, res) => {
    const location = req.params.location;

    try {
        const weatherData = await getWeatherData(location);
        res.send(weatherData);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
