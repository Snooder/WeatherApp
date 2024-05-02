const keys = require('./keys');

// Express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

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
    client.query("Create table if not exists zipcodes (zipcode VARCHAR(255))")
        .catch(err => console.log("PG Error", err))
})

// Basic Get Routes
app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.get('/zipcodes/all', async (req, res) => {
    const values = await pgClient.query("Select * from zipcodes");
    res.send(values)
})

// Basic Insert Routes
app.post('/zipcodes', async (req, res) => {
    if (!req.body.zipCode) {
        res.send({ working: false });
        return
    }
    pgClient.query("INSERT INTO zipcodes(zipcode) VALUES($1)", [req.body.zipCode], (err, result) => {
        if (err) {
            console.error("Error inserting zip code:", err);
        } else {
            console.log("Zip code inserted successfully");
        }
    });
    res.send({ working: true });
})

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

app.listen(5000, err => {
    console.log("Listening")
})