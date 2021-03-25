'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estoqueTotal', {
      id_estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'estoques',
          key: 'id'
        },
      },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'produtos',
          key: 'id'
        },
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estoqueTotal');

  }
};
