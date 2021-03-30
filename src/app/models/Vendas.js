import Sequelize, { Model } from 'sequelize';
import Stock from './Stock';
import Produto from './Produto';

class Vendas extends Model {
    static init(sequelize) {
        super.init({
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
                    mode: 'stock',
                    key: 'id'
                }
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        }, {
            sequelize,
            tableName: 'vendas'
        });

        return this;
    }

    static associate(sequelize) {
        Stock.hasMany(Vendas, {
            foreignKey: 'stock_id',

        });
        this.belongsTo(Stock,{
            foreignKey: 'stock_id',

        })

        Produto.hasMany(Vendas, {
            foreignKey: 'produto_id',

        });

        Vendas.belongsTo(Produto, {
            foreignKey: 'produto_id',

        })
    }
}

export default Vendas;

//Dev By Luis