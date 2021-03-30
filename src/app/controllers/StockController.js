import Produto from '../models/Produto';
import Stock from '../models/Stock';

class StockController {
    async index(req, res) {
        try{
        const stocks = await Stock.findAll({
            include: [
                {
                    model: Produto,
                },
            ]
        });

        return res.json(stocks);
        }
        catch (error){
            return res.status(400).send({
                message: "Fala ao exibir stocks"
            });
        }
    }

    async show(req, res) {
        const { id } = req.params;

        try{
            const stock = await Stock.findByPk(id, {
                include: [
                    {
                        model: Produto,
                    },
                ]
            });

            return res.json(stock);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao exibir stock"
            });
        }
    }

    async store(req, res) {
        const { name } = req.body;

        try{
            const stock = await Stock.create({
                name
            });

            return res.status(201).json(stock);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao cadastrar stock"
            });
        }
    }

    async update(req, res) {
        const { name } = req.body;
        const { id } = req.params;

        try{
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
        catch (error){
            return res.status(400).send({
                message: "Falha ao modificar stock"
            });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try{
        const linhas = await Stock.destroy({
            where: { id },
            returning: true
        });

        return res.json(linhas);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao deletar o stock"
            });
        }
    }
}

export default new StockController();