const { Sequelize } = require('sequelize');
require('dotenv').config();
const { log } = require('../utils/logger');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: process.env.DB_PORT || 3306,
  logging: false
});

sequelize.authenticate()
  .then(() => log('The database connection has been successfully established.'))
  .catch(err => log('The database connection could also be established due to an error:', err));

module.exports = sequelize;