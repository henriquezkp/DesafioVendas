'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categorias', [{
      id:1,
      nome: 'NOTEBOOK',
      created_at: new Date(),
      updated_at: new Date()
    },{
      id:2,
      nome: 'SMARTWATCH',
      created_at: new Date(),
      updated_at: new Date()
    },{
      id:3,
      nome: 'SMARPHONE',
      created_at: new Date(),
      updated_at: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
