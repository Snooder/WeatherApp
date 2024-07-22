// server/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sessionMiddleware = require('./config/sessionConfig');
const morgan = require('morgan'); // For logging

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Replaces bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()
app.use(sessionMiddleware);
app.use(morgan('dev')); // For logging

// Route handlers
const weatherRoutes = require('./routes/weather');
const zipCodeRoutes = require('./routes/zipcodes');

app.use('/weather', weatherRoutes);
app.use('/zipcodes', zipCodeRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
