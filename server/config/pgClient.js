// server/config/pgClient.js
const { Pool } = require('pg');
const keys = require('../keys');

const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

pgClient.on('connect', (client) => {
    client.query('CREATE TABLE IF NOT EXISTS zipcodes (zipcode VARCHAR(255))')
        .catch(err => console.log('PG Error', err));
});

module.exports = pgClient;
