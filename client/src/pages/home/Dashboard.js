import React, { useState, useCallback, useEffect } from "react";
import './Dashboard.css';
import WeatherPanel from '../../components/common/WeatherPanel';
import { Container, Box, Grid } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
    const [zipCodes, setZipCodes] = useState([]);

    const getAllZipCodes = useCallback(async () => {
        const data = await axios.get('/api/zipcodes/all');
        setZipCodes(data.data.rows.map(row => row.zipcode));
    }, []);

    useEffect(() => {
        getAllZipCodes();
    }, [getAllZipCodes]);

    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={4}>
                <Grid container spacing={2} className="values" mt={2}>
                    {zipCodes.map((zipCode, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <WeatherPanel zipCode={zipCode} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Dashboard;
