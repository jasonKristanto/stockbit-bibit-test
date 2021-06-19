const { Sequelize } = require('sequelize');
const { DB_CONFIG } = require('../config');

const db = new Sequelize(DB_CONFIG.DB, DB_CONFIG.USER, DB_CONFIG.PASSWORD, {
  host: DB_CONFIG.HOST,
  dialect: DB_CONFIG.DIALECT,
});

module.exports = db;
