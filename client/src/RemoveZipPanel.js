import './WeatherPanel.css';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const RemoveZipPanel = ({zipCode}) => {

    const removeZipCode = useCallback(async (event) => {
        event.preventDefault();

        await axios.post('/api/deletezip', {
            zipCode
        })

        getAllZipCodes();
    }, [zipCode, getAllZipCodes]);

    return (
        <div className="weather-panel">
            <h2>{zipCode}</h2>
            <form className='form' onSubmit={removeZipCode}>
                <button>Remove</button>
            </form>
        </div>
    );
};

export default RemoveZipPanel;