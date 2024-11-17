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
        default: 'https://e7.pngegg.com/pngimages/923/614/png-clipart-digital-signature-signature-block-signatures-angle-material.png'
    }
});

const Lecturer = mongoose.model('Lecturer', lecturer);

module.exports = Lecturer;