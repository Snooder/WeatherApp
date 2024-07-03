import { Card, CardContent, Typography } from '@mui/material';
import './WeatherPanel.css';
import React, { useEffect, useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles({
    card: {
        borderRadius: 15, // Rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Elevation
        padding: 20,
        maxWidth: 400,
        margin: '20px auto'
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
    },
    content: {
        fontSize: 16,
    },
});

const WeatherPanel = ({ zipCode }) => {
    const classes = useStyles();
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
        <Card className={classes.card}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {weatherLoc} - {zipCode}
            </Typography>
            <Typography className={classes.content} color="textPrimary">
                Temperature: {temperature}°F
            </Typography>
            <Typography className={classes.content} color="textPrimary">
                Precipitation Probability: {precipitation}%
            </Typography>
        </CardContent>
    </Card>
    );
};

export default WeatherPanel;