'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('saldo',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      venda_id:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'vendas',
          key: 'id'
        }
      },
      devolucao_id:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'devolucao',
          key: 'id'
        }
      },
      stock_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'stock',
          key: 'id'
        }
      },
      produto_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'produto',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
    },{
      tableName: 'saldo'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      tableName: 'saldo'
    });
  }
};
