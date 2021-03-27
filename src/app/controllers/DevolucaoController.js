/*import Stock from '../models/Stock';
import Produto from '../models/Produto';
import Devolucao from '../models/Devolucao';


class DevolucaoController {
    async index(req, res) {

        const devolucoes = await Devolucao.findAll({
            include: [
               Stock,
               Produto 
            ]
        });

        return res.json(devolucoes);
    }

    async show(req, res) {
        const { id } = req.params;

        const devolucoes = await Devolucao.findByPk(id, {
            include: [
                Stock,
                Produto
            ]
        });

        return res.json(devolucoes);
    }

    async store(req, res) {
        const { stock_id, produto_id, motivo, created_at } = req.body;

        const devolucoes = await Devolucao.create({
            stock_id,
            produto_id,
            motivo,
            created_at = new Date()
        });

        return res.json(devolucoes);
    }

    async update(req, res) {
        const { stock_id, produto_id, motivo, created_at } = req.body;
        const { id } = req.params;

        const [linhas, objetos] = await Devolucao.update({
            stock_id,
            produto_id,
            motivo,
            created_at = new Date()
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

        const linhas = await Categoria.destroy({
            where: { id },
            returning: true
        });

        return res.json(linhas);
    }
}

export default new DevolucaoController();
*/