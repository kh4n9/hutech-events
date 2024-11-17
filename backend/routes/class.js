const express  = require('express');

const router = express.Router();

const Class = require('../models/Class');

router.post('/', async (req, res) => {
    try {
        const { name, description, departmentId } = req.body;
        if(!name || !description || !departmentId) {
            return res.status(400).json({ success: false, message: 'Please fill in all fields' });
        }
        const newClass = new Class({ name, description, departmentId });
        await newClass.save();
        res.status(201).json({ success: true, message: 'Class created successfully', newClass });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json({ success: true, classes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const newClass = await Class.findById(req.params.id);
        if(!newClass) {
            return res.status(404).json({ success: false, message: 'Class not found' });
        }
        res.status(200).json({ success: true, newClass });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, description, departmentId } = req.body;
        if(!name || !description || !departmentId) {
            return res.status(400).json({ success: false, message: 'Please fill in all fields' });
        }
        const newClass = await Class.findByIdAndUpdate(req.params.id, { name, description, departmentId }, { new: true });
        if(!newClass) {
            return res.status(404).json({ success: false, message: 'Class not found' });
        }
        res.status(200).json({ success: true, message: 'Class updated successfully', newClass });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;