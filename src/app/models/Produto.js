import Sequelize, { Model } from 'sequelize';
import Categoria from './Categoria';
import Stock from './Stock';

class Produto extends Model {
    static init(sequelize) {
        super.init({
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
            sequelize,
            schema: 'loja',
            tableName: 'produto'
        });

        return this;
    }

    static associate(sequelize){
        this.belongsTo(Categoria, {
            foreignKey: 'categoria_id',
            schema: 'loja'
        });

        Categoria.hasMany(Produto, {
            foreignKey: 'categoria_id',
            schema: 'loja'
        });

        this.belongsTo(Stock, {
            foreignKey: 'stock_id',
            schema: 'loja'
        });

        Stock.hasMany(Produto, {
            foreignKey: 'stock_id',
            schema: 'loja'
        });
    }
}

export default Produto;