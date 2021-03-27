'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('loja',
     {

      });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropSchema('loja');
     
  }
};
