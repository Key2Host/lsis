const { Sequelize } = require('sequelize');
require('dotenv').config();
const { log } = require('../utils/logger');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: process.env.DB_PORT || 3306,
  logging: false
});

async function connectWithRetry(retries = 5, delay = 5000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await sequelize.authenticate();
      log('The database connection has been successfully established.');
      return;
    } catch (err) {
      log(`Database connection attempt ${attempt} failed:`, err);
      if (attempt < retries) {
        log(`Retrying in ${delay / 1000} seconds...`);
        await new Promise(res => setTimeout(res, delay));
      } else {
        log('All retry attempts failed. Please check your database configuration.');
      }
    }
  }
}

connectWithRetry();

module.exports = sequelize;