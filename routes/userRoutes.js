const express = require('express');
const router = express.Router();
const db = require('../db');

// Create User
router.post('/', async (req, res) => {
    try {
        const [userId] = await db('users').insert(req.body);
        const user = await db('users').where({ id: userId }).first();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update User
router.put('/:id', async (req, res) => {
    try {
        await db('users').where({ id: req.params.id }).update(req.body);
        const user = await db('users').where({ id: req.params.id }).first();
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

// List all Users
router.get('/', async (req, res) => {
    try {
        const users = await db('users').select('*');
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get User info
router.get('/:id', async (req, res) => {
    try {
        const user = await db('users').where({ id: req.params.id }).first();
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
