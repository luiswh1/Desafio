import Sequelize, { Model } from 'sequelize';
import Stock from './Stock';
import Vendas from './Vendas';

class Saldo extends Model {
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
              venda_id:{
                type: Sequelize.INTEGER,
                allowNull: false,
                references:{
                  model: 'vendas',
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
              quantidade: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
        },{
            sequelize,
            tableName: 'saldo'
        });

        return this;
    }

    static associate(sequelize){
        Stock.hasMany(Saldo, {
            foreignKey: 'stock_id'
        });
        
        this.belongsTo(Stock,{
            foreignKey: 'stock_id'
        });

        Vendas.hasMany(Saldo,{
            foireingKey: 'saldo_id'
        });

        Saldo.belongsTo(Vendas, {
            foireingKey: 'saldo_id'
        });
    }
}

export default Saldo;