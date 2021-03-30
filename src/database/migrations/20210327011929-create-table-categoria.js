'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('categoria', {
     id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  name: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
}, {
     tableName: 'categoria'
});
     
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable({
        tableName: 'categoria'
      });
     
  }
};

//Dev By Luis
