'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('produtos', [{
      nome: 'IPHONE XR',
      preco: 'R$ 3500.00',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'IPHONE 8',
      preco: 'R$ 2500.00',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'IPHONE 8 PLUS',
      preco: 'R$ 3000.00',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'MACBOOK AIR',
      preco: 'R$ 5800.00',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'MACBOOK PRO',
      preco: '10500.00',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'AIRPODS',
      preco: 'R$ 1500.00',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'APPLE WATCH SE',
      preco: 'R$ 2500.00',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'APPLE WATCH SERIES 3',
      preco: 'R$ 1800.00',
      created_at: new Date(),
      updated_at: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produtos', null, {});

  }
};
