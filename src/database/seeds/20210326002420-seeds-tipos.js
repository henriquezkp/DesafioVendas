'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('tiposDeMovimentacao', [{
    id:1,
    nome: 'venda',
    created_at: new Date(),
    updated_at: new Date() 
  },{
    id:2,
    nome: 'devolucao',
    created_at: new Date(),
    updated_at: new Date() 
  }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('tiposDeMovimentacao', null, {});
  }
};
