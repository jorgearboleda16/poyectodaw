// src/controllers/reservationController.js

const Reservation = require('../models/reservation');

exports.createReservation = async (req, res) => {
    try {
        const { selectedDate, selectedGuests, selectedTime, restaurantId, customerId } = req.body;
        const reservation = await Reservation.create({ date: selectedDate, guests: selectedGuests, time: selectedTime, restaurantId, customerId });
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: 'Error creating reservation' });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving reservations' });
    }
};