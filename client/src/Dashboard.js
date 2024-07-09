import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import './Dashboard.css';
import WeatherPanel from './WeatherPanel';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Dashboard = () => {
    const [zipCodes, setZipCodes] = useState([]);
    const [zipCode, setZipCode] = useState('');

    const getAllZipCodes = useCallback(async () => {
        // use nginx to redirect to right request - proper URL
        const data = await axios.get('/api/zipcodes/all');
        setZipCodes(data.data.rows.map(row => row.zipcode));
    }, []);

    const saveZipCode = useCallback(async (event) => {
        event.preventDefault();

        await axios.post('/api/zipcodes', { zipCode });

        setZipCode('');
        getAllZipCodes();
    }, [zipCode, getAllZipCodes]);

    useEffect(() => {
        getAllZipCodes();
    }, [getAllZipCodes]);

    return (
        <Container maxWidth="lg">
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
                        style={{ color: 'white', borderColor: 'white' }} // Set input text and border color to white
                    />
                    <Button type="submit" variant="contained" color="secondary" style={{ marginLeft: '8px' }}>
                        Submit
                    </Button>
                </Box>
                <Typography variant="h4" component="h2" mt={4}>
                    Weather by ZipCode
                </Typography>
                <div className="panning-container">
                    <div className="panning-content">
                        {zipCodes.map((zipCode, index) => (
                            <div key={index}>
                                <WeatherPanel zipCode={zipCode} />
                            </div>
                        ))}
                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default Dashboard;
