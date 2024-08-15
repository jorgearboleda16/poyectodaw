// src/controllers/customerController.js

const Customer = require('../models/customer');

exports.createCustomer = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body;
        const customer = await Customer.create({ firstName, lastName, email, phoneNumber });
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: 'Error creating customer' });
    }
};

exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving customers' });
    }
};