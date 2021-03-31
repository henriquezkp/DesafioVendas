'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('produtos', [{
      nome: 'IPHONE XR',
      preco: 3500,
      id_categoria:3,
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'IPHONE 8',
      preco: 2500,
      id_categoria:3,
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'IPHONE 8 PLUS',
      preco: 3000,
      id_categoria:3,
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'MACBOOK AIR',
      preco: 5800,
      id_categoria:1,
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'MACBOOK PRO',
      preco: 10500,
      id_categoria:1,
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'AIRPODS',
      preco: 1500,
      id_categoria:3,
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'APPLE WATCH SE',
      preco: 2500,
      id_categoria:2,
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'APPLE WATCH SERIES 3',
      preco: 1800,
      id_categoria:2,
      created_at: new Date(),
      updated_at: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produtos', null, {});

  }
};
