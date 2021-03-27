'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('devolucao', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stock_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'stock',
            key: 'id'
        }
    },
    produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'produto',
            key: 'id'
        }
    },
    motivo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
}, {
    schema: 'loja',
    tableName: 'devolucao'
});
       
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable({
      schema: 'loja',
      tableName: 'devolucao'
    });
     
  }
};
