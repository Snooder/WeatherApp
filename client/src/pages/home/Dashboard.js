import React, { useState, useCallback, useEffect } from "react";
import './Dashboard.css';
import WeatherPanel from '../../components/common/WeatherPanel';
import { Container, Box, Grid, Typography } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
    const [zipCodes, setZipCodes] = useState([]);
    const [error, setError] = useState(null);

    const getAllZipCodes = useCallback(async () => {
        try {
            const response = await axios.get('/api/zipcodes/all');
            const data = response.data;

            if (Array.isArray(data)) {
                setZipCodes(data);
                setError(null);
            } else {
                console.error("Unexpected data format:", data);
                setError("Unexpected data format");
            }
        } catch (error) {
            console.error("Error fetching zip codes:", error);
            setError("Error fetching zip codes");
        }
    }, []);

    useEffect(() => {
        getAllZipCodes();
    }, [getAllZipCodes]);

    return (
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={4}>
                <Grid container spacing={2} className="values" mt={2}>
                    {error ? (
                        <Typography color="error">{error}</Typography>
                    ) : zipCodes.length > 0 ? (
                        zipCodes.map((zipCode) => (
                            <Grid item xs={12} sm={6} md={4} key={zipCode}>
                                <WeatherPanel zipCode={zipCode} />
                            </Grid>
                        ))
                    ) : (
                        <Typography>Loading...</Typography>
                    )}
                </Grid>
            </Box>
        </Container>
    );
};

export default Dashboard;
