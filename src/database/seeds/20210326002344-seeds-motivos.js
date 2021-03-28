'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('motivos', [{
      nome: 'Produto com defeito',
      created_at: new Date(),
      updated_at: new Date() 
    },{
      nome: 'Mercadoria em desacordo com o pedido',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'Desistência da compra',
      created_at: new Date(),
      updated_at: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('motivos', null, {});

  }
};
