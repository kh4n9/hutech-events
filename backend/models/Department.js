const mongoose = require('mongoose');

const departmentChema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    abbreviation: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Department = mongoose.model('Department', departmentChema);

module.exports = Department;