const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
        // Aquí puedes remover la opción 'allowPublicKeyRetrieval' si no es necesaria
        ssl: {
            rejectUnauthorized: false // Puedes mantener esto si es necesario para tu configuración SSL
        }
    },
    logging: false,
});

module.exports = sequelize;