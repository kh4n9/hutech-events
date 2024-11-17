const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    decsription: {
        type: String,
        required: true,
        trim: true,
    },
    time: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    lecturerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lecturer',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;