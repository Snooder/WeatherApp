import './WeatherPanel.css';
import React, { useEffect, useState } from 'react';

const WeatherPanel = ({ zipCode }) => {
    const [weatherAPI, setWeatherAPI] = useState({})
    const [loading, setLoading] = useState(true);
    let isFetchingGlobal = false;

    useEffect(() => {
        let throttleTimer;

        const fetchWeatherDataByZip = async (zipCode) => {
            try {
                isFetchingGlobal = true;
                console.log('API Key:', process.env.REACT_APP_WEATHER_API_KEY);
                const response = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${zipCode} US&units=imperial&apikey=${process.env.REACT_APP_WEATHER_API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeatherAPI(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
                isFetchingGlobal = false;
            }
        };

        if (zipCode && !isFetchingGlobal) {
            throttleTimer = setTimeout(() => {
                fetchWeatherDataByZip(zipCode);
            }, 5000);
        }

        return () => {
            clearTimeout(throttleTimer);
        };
    }, [zipCode, isFetchingGlobal]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!weatherAPI) {
        return <div>Error fetching weather data on {zipCode}</div>;
    }

    // console.log(weatherAPI)
    const weatherLoc = weatherAPI?.location?.name;
    const temperature = weatherAPI?.data?.values?.temperature;
    const precipitation = weatherAPI?.data?.values?.precipitationProbability;
    return (
        <div className="weather-panel">
            <h2>{weatherLoc} - {zipCode}</h2>
            <div className="weather-info">
                <p>Temperature: {temperature}°F</p>
                <p>Precipitation Probability (%): {precipitation}</p>
            </div>
        </div>
    );
};

export default WeatherPanel;