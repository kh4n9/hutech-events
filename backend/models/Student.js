const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    mssv: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    birthday: {
        type: Date,
    },
    sex: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    staff: {
        type: String,
        required: true,
        default: 'student'
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;