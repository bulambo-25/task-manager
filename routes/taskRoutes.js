const express = require('express');
const router = express.Router();
const db = require('../db');

// Create Task
router.post('/', async (req, res) => {
    try {
        const [taskId] = await db('tasks').insert({ ...req.body, user_id: req.params.user_id });
        const task = await db('tasks').where({ id: taskId }).first();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update Task
router.put('/:task_id', async (req, res) => {
    try {
        await db('tasks').where({ id: req.params.task_id }).update(req.body);
        const task = await db('tasks').where({ id: req.params.task_id }).first();
        res.json(task);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete Task
router.delete('/:task_id', async (req, res) => {
    try {
        await db('tasks').where({ id: req.params.task_id }).del();
        res.status(204).end();
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get Task Info
router.get('/:task_id', async (req, res) => {
    try {
        const task = await db('tasks').where({ id: req.params.task_id }).first();
        res.json(task);
    } catch (err) {
        res.status(400).json(err);
    }
});

// List all Tasks for a user
router.get('/', async (req, res) => {
    try {
        const tasks = await db('tasks').where({ user_id: req.params.user_id });
        res.json(tasks);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
