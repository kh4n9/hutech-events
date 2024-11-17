const mongoose = require('mongoose');

const lecturer = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    signatureUrl: {
        type: String,
    }
});

const Lecturer = mongoose.model('Lecturer', lecturer);

module.exports = Lecturer;