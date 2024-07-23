const express = require('express');
const { createUser, getUser, addFriend } = require('../../services/userService');
const router = express.Router();

// Create new user
router.post('/', async (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        res.status(400).send('Username and email are required.');
        return;
    }

    try {
        const user = await createUser(username, email);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get user details
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await getUser(userId);
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Add friend to user
router.post('/:userId/friends', async (req, res) => {
    const userId = req.params.userId;
    const { friendId } = req.body;

    if (!friendId) {
        res.status(400).send('Friend ID is required.');
        return;
    }

    try {
        await addFriend(userId, friendId);
        res.status(200).send('Friend added');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
