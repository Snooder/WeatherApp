const Bull = require('bull');

const taskQueue = new Bull('task-queue', {
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASSWORD || undefined,
    },
});

taskQueue.process(async (job) => {
    console.log(`Processing job with id ${job.id}`);
});

module.exports = taskQueue;
