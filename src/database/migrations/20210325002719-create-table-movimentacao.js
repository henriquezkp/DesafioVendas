'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movimentacoes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tiposDeMovimentacao',
          key: 'id'
        },
      },
      id_motivo: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'motivos',
          key: 'id'
        },
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estoqueTotal',
          key: 'id'
        },
      },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produtos',
          key: 'id'
        },
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
    await queryInterface.dropTable('movimentacoes');
  }
};