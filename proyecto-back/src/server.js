// src/server.js

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../config/database');
const restaurantRoutes = require('./routes/restaurantRoutes');
const customerRoutes = require('./routes/customerRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Rutas
app.use(cors({
    origin: 'http://localhost:4200', // Permitir solicitudes desde esta URL
    credentials: true
  }));
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/reservations', reservationRoutes);


const port = process.env.PORT || 5001;
sequelize.sync({ alter: true }).then(() => {
    console.log('Database synced');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.error('Error syncing database:', error);
});