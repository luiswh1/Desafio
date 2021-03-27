import Produto from '../models/Produto';
import Stock from '../models/Stock';

class StockController {
    async index(req, res) {
        const depositos = await Stock.findAll({
           
        });

        return res.json(depositos);
    }
}

export default new StockController();