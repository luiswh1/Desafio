'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('stock', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    }, },
    {
      tableName: 'stock'
  });    
     
},

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable({
     tableName: 'stock'
   });
     
  }
};
