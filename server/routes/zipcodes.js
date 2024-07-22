// server/routes/zipcodes.js
const express = require('express');
const pgClient = require('../config/pgClient');

const router = express.Router();

// Basic Get Routes
router.get('/all', async (req, res) => {
    try {
        const values = await pgClient.query('SELECT * FROM zipcodes');
        res.send(values.rows);
    } catch (error) {
        console.error('Error fetching zip codes:', error);
        res.status(500).json({ error: 'Failed to fetch zip codes' });
    }
});

// Basic Insert Routes
router.post('/', async (req, res) => {
    const { zipCode } = req.body;
    if (!zipCode) {
        return res.status(400).send({ working: false, message: 'Zip code is required' });
    }

    try {
        await pgClient.query('INSERT INTO zipcodes(zipcode) VALUES($1)', [zipCode]);
        res.send({ working: true });
    } catch (error) {
        console.error('Error inserting zip code:', error);
        res.status(500).json({ error: 'Failed to insert zip code' });
    }
});

// Basic Remove Route
router.post('/delete', async (req, res) => {
    const { zipCode } = req.body;
    if (!zipCode) {
        return res.status(400).send({ working: false, message: 'Zip code is required' });
    }

    try {
        const result = await pgClient.query('DELETE FROM zipcodes WHERE zipcode = $1', [zipCode]);
        if (result.rowCount === 0) {
            return res.status(404).send({ working: false, message: 'Zip code not found' });
        }
        res.send({ working: true });
    } catch (error) {
        console.error('Error deleting zip code:', error);
        res.status(500).json({ error: 'Failed to delete zip code' });
    }
});

module.exports = router;
