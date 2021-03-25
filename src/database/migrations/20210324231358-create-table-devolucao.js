'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('devolucoes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_Estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estoques',
          key: 'id'
        },
      },
      id_Produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produtos',
          key: 'id'
        },
      },
      id_Motivo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'motivos',
          key: 'id'
        },
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('devolucoes');
  }
};
