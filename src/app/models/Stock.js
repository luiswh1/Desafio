import Sequelize, { Model } from 'sequelize';



class Stock extends Model {
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
        }, {
            sequelize,
            tableName: 'stock'
        });

        return this;
    }

}

export default Stock;