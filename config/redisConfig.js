const redis = require('redis');

const redisClient = redis.createClient({
    url: process.env.REDIS_URL // Example: 'redis://:your-redis-password@your-redis-host:6379'
});

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

module.exports = redisClient;
