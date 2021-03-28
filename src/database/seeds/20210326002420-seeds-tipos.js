'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('tiposDeMovimentacao', [{
    nome: 'venda',
    created_at: new Date(),
    updated_at: new Date() 
  },{
    nome: 'devolucao',
    created_at: new Date(),
    updated_at: new Date() 
  }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('tiposDeMovimentacao', null, {});
  }
};
