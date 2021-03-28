'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('estoques', [{
      nome: 'Caxias',
      created_at: new Date(),
      updated_at: new Date() 
    },{
      nome: 'Novo Hamburgo',
      created_at: new Date(),
      updated_at: new Date() 
    },{
      nome: 'Sao Leopoldo',
      created_at: new Date(),
      updated_at: new Date() 
    },], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('estoques', null, {});

  }
};
