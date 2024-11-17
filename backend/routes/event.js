const express = require('express');

const router = express.Router();

const Event = require('../models/Event');

router.post('/', async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send({ success: true, event });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).send({ success: true, events });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).send({ success: true, event });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({ success: true, event });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        res.status(200).send({ success: true, event });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

module.exports = router;