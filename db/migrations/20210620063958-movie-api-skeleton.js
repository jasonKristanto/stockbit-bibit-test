module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('api_log', {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    endpoint: {
      primaryKey: true,
      type: Sequelize.STRING,
      allowNull: false,
    },
    parameter: {
      primaryKey: true,
      type: Sequelize.STRING,
      allowNull: false,
    },
    requested_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('api_log'),
};
