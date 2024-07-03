import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import './MainComponent.css';
import WeatherPanel from './WeatherPanel';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const MainComponent = () => {
    const [zipCodes, setZipCodes] = useState([]);

    const [zipCode, setZipCode] = useState('');

    const getAllZipCodes = useCallback(async () => {
        // use nginx to redirect to right request - proper URL
        const data = await axios.get('/api/zipcodes/all');
        setZipCodes(data.data.rows.map(row => row.zipcode));
    }, []);

    const saveZipCode = useCallback(async (event) => {
        event.preventDefault();

        await axios.post('/api/zipcodes', {
            zipCode
        });

        setZipCode('');
        getAllZipCodes();
    }, [zipCode, getAllZipCodes]);

    useEffect(() => {
        getAllZipCodes();
    }, [getAllZipCodes]);

    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={4}>
                <Button variant="contained" color="primary" onClick={getAllZipCodes}>
                    Get all Values
                </Button>
                <Box component="form" onSubmit={saveZipCode} mt={2} display="flex" flexDirection="column" alignItems="center">
                    <TextField
                        label="Zip Code"
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="secondary">
                        Submit
                    </Button>
                </Box>
                <Typography variant="h4" component="h2" mt={4}>
                    Weather by ZipCode
                </Typography>
                <Box className="values" mt={2}>
                    {zipCodes.map((zipCode, index) => (
                        <WeatherPanel key={index} zipCode={zipCode} />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default MainComponent;
