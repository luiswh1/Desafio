import Produto from '../models/Produto';
import Stock from '../models/Stock';

class StockController {
    async index(req, res) {
        const depositos = await Stock.findAll({
           
        });

        return res.json(depositos);
    }

    async show(req, res) {
        const { id } = req.params;

        const stock = await Stock.findByPk(id);

        return res.json(stock);
    }

    async store(req, res) {
        const { name } = req.body;

        const stock = await Stock.create({
            name
        });

        return res.json(stock);
    }

    async update(req, res) {
        const { name } = req.body;
        const { id } = req.params;

        const [linhas, objetos] = await Stock.update({
            name
        }, {
            where: { id },
            returning: true            
        });

        return res.json({
            linhas,
            objetos
        });
    }

    async delete(req, res) {
        const { id } = req.params;

        const linhas = await Stock.destroy({
            where: { id },
            returning: true
        });

        return res.json(linhas);
    }
}

export default new StockController();