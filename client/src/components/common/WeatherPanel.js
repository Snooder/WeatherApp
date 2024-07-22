// src/components/WeatherPanel.js
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './WeatherPanel.css';
import { styled } from '@mui/system';
import axios from 'axios';

const CardStyled = styled(Card)({
    borderRadius: 15,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: 20,
    width: 400,
    margin: '20px auto',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
});

const Title = styled(Typography)({
    fontSize: 20,
    marginBottom: 15,
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    color: 'black',
});

const Content = styled(Typography)({
    fontSize: 16,
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    color: 'black',
});

const WeatherPanel = ({ zipCode }) => {
    const [weatherAPI, setWeatherAPI] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`/weather/${zipCode}`);
                console.log('Weather data:', response.data); // Debug: log the response

                if (response.data.length > 0) {
                    setWeatherAPI(response.data[0]);
                } else {
                    setError('No weather data available');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setError('Failed to fetch weather data');
                setLoading(false);
            }
        };

        if (zipCode) {
            fetchWeatherData();
        }
    }, [zipCode]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!weatherAPI) {
        return <div>Error fetching weather data for {zipCode}</div>;
    }

    const weatherLoc = weatherAPI?.location?.name || 'Unknown location';
    const temperature = weatherAPI?.data?.values?.temperature || 'N/A';
    const precipitation = weatherAPI?.data?.values?.precipitationProbability || 'N/A';

    return (
        <CardStyled>
            <CardContent>
                <Title color="textSecondary" gutterBottom>
                    {weatherLoc} - {zipCode}
                </Title>
                <Content color="textPrimary">
                    Temperature: {temperature}°F
                </Content>
                <Content color="textPrimary">
                    Precipitation Probability: {precipitation}%
                </Content>
            </CardContent>
        </CardStyled>
    );
};

export default WeatherPanel;
