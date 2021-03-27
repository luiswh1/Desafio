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
     schema: 'loja',
     tableName: 'categoria'
});
     
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable({
        schema: 'loja',
        tableName: 'categoria'
      });
     
  }
};
