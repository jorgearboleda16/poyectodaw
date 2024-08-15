// src/models/reservation.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Restaurant = require('./restaurant');
const Customer = require('./customer');

const Reservation = sequelize.define('Reservation', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    guests: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
});

Reservation.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
Reservation.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Reservation;