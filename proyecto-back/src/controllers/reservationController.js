const Reservation = require('../models/reservation');

exports.createReservation = async (req, res) => {
    try {
        const { selectedDate, selectedGuests, selectedTime } = req.body;
        const reservation = await Reservation.create({ date: selectedDate, guests: selectedGuests, time: selectedTime });
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: 'Error creating reservation' });
    }
};