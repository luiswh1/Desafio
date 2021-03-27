import Sequelize, { Model } from 'sequelize';
import Stock from './Stock';
import Produto from './Produto';

class Devolucao extends Model {
    static init(sequelize){
        super.init({
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
            sequelize,
            schema: 'loja',
            tableName: 'devolucao'
        });

        return this;
    }

    static associate(sequelize){
        Stock.hasMany(Devolucao, {
            foreignKey: 'stock_id',
            schema: 'loja'
        });

        Produto.hasMany(Devolucao, {
            foreignKey: 'produto_id',
            schema: 'loja'
        });
    }
}