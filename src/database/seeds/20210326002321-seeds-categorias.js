'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categorias', [{
      nome: 'NOTEBOOK',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'SMARTWATCH',
      created_at: new Date(),
      updated_at: new Date()
    },{
      nome: 'SMARPHONE',
      created_at: new Date(),
      updated_at: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
