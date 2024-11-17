const express = require('express');

const router = express.Router();

const Student = require('../models/Student');

router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send({ success: true, student });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send({ success: true, students });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).send({ success: true, student });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({ success: true, student });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.status(200).send({ success: true, student });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
});

module.exports = router;