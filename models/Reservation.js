const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    people: {
        type: Number,
        required: true
    },
    date: {
        type: String, // Storing as string for simplicity (e.g. "November 9, 2026")
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'confirmed'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);