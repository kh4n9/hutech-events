const express = require('express');
const verifyToken = require('../middlewares/auth');
const verifyAdmin = require('../middlewares/auth');

const router = express.Router();

const Department = require('../models/Department');

router.post('/', async (req, res) => {
    try {
        const { name, description, abbreviation } = req.body;
        if(!name || !description || !abbreviation) {
            return res.status(400).json({ success: false, message: 'Please fill in all fields' });
        }
        const department = new Department({ name, description, abbreviation });
        await department.save();
        res.status(201).json({ success: true, message: 'Department created successfully', department });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/', verifyAdmin, async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json({ success: true, departments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if(!department) {
            return res.status(404).json({ success: false, message: 'Department not found' });
        }
        res.status(200).json({ success: true, department });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, description, abbreviation } = req.body;
        if(!name || !description || !abbreviation) {
            return res.status(400).json({ success: false, message: 'Please fill in all fields' });
        }
        const department = await Department.findByIdAndUpdate(req.params.id, { name, description, abbreviation }, { new: true });
        if(!department) {
            return res.status(404).json({ success: false, message: 'Department not found' });
        }
        res.status(200).json({ success: true, message: 'Department updated successfully', department });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id);
        if(!department) {
            return res.status(404).json({ success: false, message: 'Department not found' });
        }
        res.status(200).json({ success: true, message: 'Department deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;