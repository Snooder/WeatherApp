const express = require('express');
const redisClient = require('../config/redisConfig');
const axios = require('axios');

const router = express.Router();

router.get('/:zipCode', async (req, res) => {
    const { zipCode } = req.params;

    try {
        console.log(`Received request for zipCode: ${zipCode}`);

        const cachedData = await redisClient.get(zipCode);
        if (cachedData) {
            console.log(`Cache hit for zipCode: ${zipCode}`);
            return res.json(JSON.parse(cachedData));
        } else {
            console.log(`Cache miss for zipCode: ${zipCode}`);
        }

        const response = await axios.get(`https://api.tomorrow.io/v4/weather/realtime`, {
            params: {
                location: `${zipCode} US`,
                units: 'imperial',
                apikey: process.env.REACT_APP_WEATHER_API_KEY,
            },
        });
        console.log(`Response from tomorrow.ai: ${response}`);

        const data = response.data;
        await redisClient.set(zipCode, JSON.stringify(data), 'EX', 3600); // Cache for 1 hour

        res.json(data);
    } catch (error) {
        if (error.response) {
            console.error('Error response from weather API:', error.response.data);
            res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            console.error('No response received from weather API:', error.request);
            res.status(500).json({ error: 'No response received from weather API' });
        } else {
            console.error('Error setting up request to weather API:', error.message);
            res.status(500).json({ error: 'Error setting up request to weather API' });
        }
    }
});

module.exports = router;
