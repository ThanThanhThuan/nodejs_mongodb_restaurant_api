require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Reservation = require('./models/Reservation');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json()); // Parse JSON bodies

// Database Connection
// Replace with your MongoDB Atlas URI if using cloud, or local instance
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/restaurant_db';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// --- ROUTES ---

// 1. Create a Reservation
app.post('/api/reservations', async (req, res) => {
    try {
        const { people, date, time } = req.body;

        // Simple validation
        if (!people || !date || !time) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newReservation = new Reservation({
            people,
            date,
            time
        });

        const savedReservation = await newReservation.save();
        res.status(201).json({
            success: true,
            message: 'Reservation created successfully',
            data: savedReservation
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 2. Get All Reservations (For testing/admin)
app.get('/api/reservations', async (req, res) => {
    try {
        const reservations = await Reservation.find().sort({ createdAt: -1 });
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});