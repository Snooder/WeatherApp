// server/config/sessionConfig.js
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const redis = require('redis');

const redisClient = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
    client: redisClient,
});

const sessionMiddleware = session({
    store: redisStore,
    secret: process.env.SESSION_SECRET || 'default-secret', // Use environment variable for secret
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    },
});

module.exports = sessionMiddleware;
