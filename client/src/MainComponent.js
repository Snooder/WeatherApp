import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import './MainComponent.css';
import WeatherPanel from './WeatherPanel';
import { TextField, Button, Typography, Container, Box, Grid } from '@mui/material';

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
        <Container maxWidth="md">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={4}>
                <Button variant="contained" color="primary" onClick={getAllZipCodes}>
                    Get all Values
                </Button>
                <Box display="flex" alignItems="center" mt={2} component="form" onSubmit={saveZipCode}>
                    <Typography variant="h6" component="span" mr={2}>
                        Where do you want to see the weather for?
                    </Typography>
                    <TextField
                        label="Zip Code"
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)}
                        variant="outlined"
                        margin="normal"
                        size="small"
                    />
                    <Button type="submit" variant="contained" color="secondary" style={{ marginLeft: '8px' }}>
                        Submit
                    </Button>
                </Box>
                <Typography variant="h4" component="h2" mt={4}>
                    Weather by ZipCode
                </Typography>
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

export default MainComponent;
