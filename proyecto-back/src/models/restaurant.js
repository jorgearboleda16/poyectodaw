// src/models/restaurant.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Restaurant = sequelize.define('Restaurant', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
});

module.exports = Restaurant;