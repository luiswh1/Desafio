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
            tableName: 'produto'
        });

        return this;
    }

    static associate(sequelize){
        this.belongsTo(Categoria, {
            as: 'Categoria',
            foreignKey: 'categoria_id',
        });

        Categoria.hasMany(Produto, {
            as: 'Categoria',
            foreignKey: 'categoria_id',
        });

        this.belongsTo(Stock, {
            foreignKey: 'stock_id',
        });

        Stock.hasMany(Produto, {
            foreignKey: 'stock_id',
        });
    }
}

export default Produto;

//Dev By Luis