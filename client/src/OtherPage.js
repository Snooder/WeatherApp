import axios from 'axios';
import {Link } from "react-router-dom";
import RemoveZipPanel from './RemoveZipPanel';
import React, { useCallback, useEffect, useState } from 'react';

const OtherPage = () => {
    const [zipCodes, setZipCodes] = useState([])
    const [zipCode, setZipCode] = useState('')

    const getAllZipCodes = useCallback(async () => {
        // use nginx to redirect to right request - proper URL
        const data = await axios.get('/api/zipcodes/all')
        setZipCodes(data.data.rows.map(row => row.zipcode))
    }, []);

    useEffect(() => {
        // getAllZipCodes();
    }, [getAllZipCodes]);

    return (
        
        <div>
            <div>
                <Link to="/">Go back to home</Link>
            </div>
            {zipCodes.map((zipCode, index) => (
                    <RemoveZipPanel key={index} zipCode={zipCode} getAllZipCodes={getAllZipCodes}/>
            ))}
        </div>
    )
}

export default OtherPage;