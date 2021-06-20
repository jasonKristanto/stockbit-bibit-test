const { DataTypes, Sequelize } = require('sequelize');
const { db, dbTest } = require('./connection');

const modelAttributes = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  endpoint: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  parameter: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  requested_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

const modelOptions = {
  tableName: 'api_log',
  timestamps: false,
};

const ApiLog = db.define('ApiLog', modelAttributes, modelOptions);
const ApiLogTest = dbTest.define('ApiLog', modelAttributes, modelOptions);

module.exports = { ApiLog, ApiLogTest };
