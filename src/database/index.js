import Sequelize from 'sequelize';
import config from '../config/database';
import Categoria from '../app/models/Categoria';
import Stock from '../app/models/Stock';
import Produto from '../app/models/Produto';
import Vendas from '../app/models/Vendas';
import Devolucao from '../app/models/Devolucao';
import Saldo from '../app/models/Saldo';


const models = [
    Categoria,
    Stock,
    Produto,
    Vendas,
    Devolucao,
    Saldo
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