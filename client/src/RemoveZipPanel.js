import './WeatherPanel.css';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const RemoveZipPanel = ({ zipCode }) => {

    return (
        <div className="weather-panel">
            <h2>{zipCode}</h2>
            <form className='form'>
                <button>Remove</button>
            </form>
        </div>
    );
};

export default RemoveZipPanel;