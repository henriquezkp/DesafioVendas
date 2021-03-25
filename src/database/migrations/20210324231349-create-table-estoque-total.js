'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estoqueTotal', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_estoque:{

      },
      id_produto:{

      },
      quantidade:{
        
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estoqueTotal');

  }
};
