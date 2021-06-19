const { DataTypes, Sequelize } = require('sequelize');
const db = require('./connection');

const ApiLog = db.define('ApiLog', {
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
}, {
  tableName: 'api_log',
  timestamps: false,
});

module.exports = ApiLog;
