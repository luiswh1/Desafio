import Stock from '../models/Stock';
import Produto from '../models/Produto';
import Devolucao from '../models/Devolucao';


class DevolucaoController {
    async index(req, res) {

        try{
            const devolucoes = await Devolucao.findAll({
                include: [
                    {
                        model: Stock,

                    },
                    {
                        model: Produto,
                    },
                ]
            });

            return res.json(devolucoes);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao exibir as devoluções"
            });
        }
    } 

    async show(req, res) {
        const { id } = req.params;

        try{
            const devolucoes = await Devolucao.findByPk(id, {
                include: [
                    {
                        model: Stock,

                    },
                    {
                        model: Produto,
                    },
                ]});

            return res.json(devolucoes);
        }
        catch(error){
            return res.status(400).send({
                message: "Falha ao exibir a devolução"
            });
        }
    }

    async store(req, res) {
        const { stock_id, produto_id, motivo, created_at } = req.body;

        try{
            const devolucoes = await Devolucao.create({
                stock_id,
                produto_id,
                motivo,
                created_at: new Date()
            });

            return res.status(201).json(devolucoes);
        }
        catch (error){
            console.log(error)
            return res.status(400).send({
                message: "Devolução não pôde ser realizada"
            });
        }
    } 

    async update(req, res) {
        const { stock_id, produto_id, motivo, created_at } = req.body;
        const { id } = req.params;

        try{
            const [linhas, objetos] = await Devolucao.update({
                stock_id,
                produto_id,
                motivo,
                created_at, //= new Date() //ISSO GERAVA ERRO
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
                message: "Falha ao modificar a devolução"
            });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try{
            const linhas = await Devolucao.destroy({
                where: { id },
                returning: true
            });

            return res.json(linhas);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao deletar a devolução"
            });
        }
    }
}

export default new DevolucaoController();

//Dev By Milene
