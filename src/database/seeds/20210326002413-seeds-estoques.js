'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('estoques', [{
      id:1,
      nome: 'Caxias',
      created_at: new Date(),
      updated_at: new Date() 
    },{
      id:2,
      nome: 'Novo Hamburgo',
      created_at: new Date(),
      updated_at: new Date() 
    },{
      id:3,
      nome: 'Sao Leopoldo',
      created_at: new Date(),
      updated_at: new Date() 
    },], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('estoques', null, {});

  }
};
