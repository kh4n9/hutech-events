const express = require('express');

const router = express.Router();

const Lecturer = require('../models/Lecturer');

router.post('/' , async (req, res) => {
    try {
        const lecturer = new Lecturer(req.body);
        await lecturer.save();
        res.status(201).send(success = true, lecturer);
    } catch (error) {
        res.status(400).send(success = false, error);
    }
});

router.get('/' , async (req, res) => {
    try {
        const lecturers = await Lecturer.find();
        res.status(200).send(success = true, lecturers);
    } catch (error) {
        res.status(400).send(success = false, error);
    }
});

router.get('/:id' , async (req, res) => {
    try {
        const lecturer = await Lecturer.findById(req.params.id);
        res.status(200).send({success: true, lecturer});
    } catch (error) {
        res.status(400).send({success: false, error});
    }
});

router.put('/:id' , async (req, res) => {
    try {
        const lecturer = await Lecturer.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).send({success: true, lecturer});
    } catch (error) {
        res.status(400).send({success: false, error});
    }
});

router.delete('/:id' , async (req, res) => {
    try {
        const lecturer = await Lecturer.findByIdAndDelete(req.params.id);
        res.status(200).send({success: true, lecturer});
    } catch (error) {
        res.status(400).send({success: false, error});
    }
});

module.exports = router;