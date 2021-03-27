import Sequelize from 'sequelize';
import config from '../config/database';
import Categoria from '../app/models/Categoria';
import Stock from '../app/models/Stock';
//import Devolucao from '../app/models/Devolucao';


const models = [
    Categoria,
    Stock,
   // Devolucao
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection));
    }
}

export default new Database();