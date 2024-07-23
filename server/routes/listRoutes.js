const express = require('express');
const { createList, addLocationToList, removeLocationFromList, getLists } = require('../../services/listService');
const router = express.Router();

// Create new list
router.post('/', async (req, res) => {
    const { userId, name, locations } = req.body;

    if (!userId || !name || !locations) {
        res.status(400).send('User ID, name, and locations are required.');
        return;
    }

    try {
        const list = await createList(userId, name, locations);
        res.status(201).send(list);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Add location to list
router.post('/:listId/locations', async (req, res) => {
    const { listId } = req.params;
    const { location } = req.body;

    if (!location) {
        res.status(400).send('Location is required.');
        return;
    }

    try {
        await addLocationToList(listId, location);
        res.status(200).send('Location added');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Remove location from list
router.delete('/:listId/locations', async (req, res) => {
    const { listId } = req.params;
    const { location } = req.body;

    if (!location) {
        res.status(400).send('Location is required.');
        return;
    }

    try {
        await removeLocationFromList(listId, location);
        res.status(200).send('Location removed');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get user lists
router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const lists = await getLists(userId);
        res.send(lists);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
