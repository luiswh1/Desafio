'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('produto', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  name: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
  stock_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'stock',
          key: 'id'
      }
  },
  categoria_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'categoria',
          key: 'id'
      }
  }
}, {
    schema: 'loja',
    tableName: 'produto'
    });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable({
       schema: 'loja',
       tableName: 'produto'
     });
     
  }
};
