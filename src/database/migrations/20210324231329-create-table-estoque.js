'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estoques',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING(100),
          allowNull: false
        }
      });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estoques');

  }
};


