'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('vendas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    produto_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'produto',
        key: 'id'
      }
    },
    stock_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'stock',
            key: 'id'
        }
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
}, {

    tableName: 'vendas'
});
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({

      tableName: 'vendas'
    });  
  }
};
