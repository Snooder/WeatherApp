import React from 'react';
import './WeatherBackdrop.css';

const WeatherBackdrop = () => {
    return (
        <div className="weather-backdrop">
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="rain"></div>
            <div className="rain"></div>
        </div>
    );
};

export default WeatherBackdrop;
