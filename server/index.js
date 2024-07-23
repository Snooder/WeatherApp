require('dotenv').config(); // Load environment variables

const keys = require('../server/keys');
const { Sequelize } = require('sequelize');
const sequelize = require('../config/sequelizeConfig'); // Import Sequelize instance
const User = require('../models/User')(sequelize, require('sequelize').DataTypes); // Import User model
const List = require('../models/List')(sequelize, require('sequelize').DataTypes); // Import List model
const WeatherData = require('../models/WeatherData')(sequelize, require('sequelize').DataTypes); // Import WeatherData model

// Express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Firebase Admin SDK
const { admin, db, rtdb } = require('../config/firebaseConfig'); // Import Firebase configuration

// Postgres
const { Pool } = require("pg");
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

pgClient.on("connect", (client) => {
    client.query("CREATE TABLE IF NOT EXISTS zipcodes (zipcode VARCHAR(255))")
        .catch(err => console.log("PG Error", err));
});

// Redis
const redisClient = require('../config/redisConfig');

// Routes
const userRoutes = require('./routes/userRoutes');
const listRoutes = require('./routes/listRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

// Basic Get Routes
app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/zipcodes/all', async (req, res) => {
    const values = await pgClient.query("SELECT * FROM zipcodes");
    res.send(values.rows);
});

// Basic Insert Routes
app.post('/zipcodes', async (req, res) => {
    if (!req.body.zipCode) {
        res.send({ working: false });
        return;
    }
    pgClient.query("INSERT INTO zipcodes(zipcode) VALUES($1)", [req.body.zipCode], (err, result) => {
        if (err) {
            console.error("Error inserting zip code:", err);
            res.send({ working: false });
        } else {
            console.log("Zip code inserted successfully");
            res.send({ working: true });
        }
    });
});

// Basic Remove Route
app.post('/deletezip', async (req, res) => {
    if (!req.body.zipCode) {
        res.send({ working: false });
        return;
    }

    pgClient.query("DELETE FROM zipcodes WHERE zipcode = $1", [req.body.zipCode], (err, result) => {
        if (err) {
            console.error("Error deleting zip code:", err);
            res.send({ working: false });
        } else {
            if (result.rowCount === 0) {
                console.log("Zip code not found:", req.body.zipCode);
                res.send({ working: false, message: "Zip code not found" });
            } else {
                console.log("Zip code deleted successfully:", req.body.zipCode);
                res.send({ working: true });
            }
        }
    });
});

// Use Routes
app.use('/users', userRoutes);
app.use('/lists', listRoutes);
app.use('/weather', weatherRoutes);

app.listen(5000, err => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log("Listening on port 5000");
    }
});
