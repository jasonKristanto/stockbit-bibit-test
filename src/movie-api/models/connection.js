const { Sequelize } = require('sequelize');
const { DEV, TEST } = require('../config');

const db = new Sequelize(DEV.DB_CONFIG.DB, DEV.DB_CONFIG.USER, DEV.DB_CONFIG.PASSWORD, {
  host: DEV.DB_CONFIG.HOST,
  dialect: DEV.DB_CONFIG.DIALECT,
});

const dbTest = new Sequelize(TEST.DB_CONFIG.DB, TEST.DB_CONFIG.USER, TEST.DB_CONFIG.PASSWORD, {
  host: TEST.DB_CONFIG.HOST,
  dialect: TEST.DB_CONFIG.DIALECT,
});

module.exports = { db, dbTest };
