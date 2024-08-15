// src/controllers/restaurantController.js

const Restaurant = require('../models/restaurant');

exports.createRestaurant = async (req, res) => {
    try {
        const { name, location, capacity } = req.body;
        const restaurant = await Restaurant.create({ name, location, capacity });
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Error creating restaurant' });
    }
};

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving restaurants' });
    }
};