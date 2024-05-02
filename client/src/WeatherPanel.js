import React from 'react';
import './WeatherPanel.css';
import { useCallback, useEffect, useState } from 'react';

async function fetchWeatherDataByZip(zipCode) {
    try {
        const response = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${zipCode} US&apikey=PKSj8aUrx3ExsJ1TaqSrvtrYdxGkjYKV`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

const WeatherPanel = (zipCode) => {
    const weatherData = fetchWeatherDataByZip(zipCode)
    // console.log(weatherData)
    const temperature = weatherData['timelines']['daily'][0]['temperature']
    const city = weatherData['location']['name']
    const precipitation = weatherData['timelies']['daily'][0]['precipitationProbabilityAvg']
    return (
        <div className="weather-panel">
            <h2>{city}</h2>
            <div className="weather-info">
                <p>Temperature: {temperature}°F</p>
                <p>Precipitation Probability (Average %): {precipitation}</p>
            </div>
        </div>
    );
};

export default WeatherPanel;