import Sequelize, { Model } from 'sequelize';
import Produto from './Produto';


class Categoria extends Model {
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
            schema: 'loja',
            tableName: 'categoria'
        });

        return this;
    }


}

export default Categoria;