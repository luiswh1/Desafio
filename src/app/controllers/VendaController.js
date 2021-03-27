import Venda from '../models/Vendas';
//import Produto from '../models/Produto';
//import Stock from '../models/Stock';

class VendaController {
    async index(req, res){
        try{
            const venda = await Venda.findAll({
                /*include: [ 
                    {
                        model: Produto,
                        model: Stock
                    }
                ]*/ //INCLUDE AINDA ATRAPALHA
            });

            return res.json(venda);
        }
        catch(error){
            return res.status(400).send({
                message: "Vendas não podem ser exibidas"
            });
        }
    }

    async show(req, res){
        const { id } = req.params;

        try{
            const venda = await Venda.findByPk(id);

            return res.json(venda);
        }
        catch (error){
            return res.status(400).send({
                message: "Venda não encontrada"
            });
        }
    }

    async store(req, res){
        const { produto_id, stock_id, created_at } = req.body;

        try{
            const venda = await Venda.create({
                produto_id, stock_id, created_at,
            });

            return res.json(venda);
        }
        catch (error){
            return res.status(400).send({
                message: "Venda não executada" 
            });
        }
    }

    async update(req, res){
        const { produto_id, stock_id } = req.body;
        const { id } = req.params;

        try{
            const [linhas, objetos] = await Venda.update({
                produto_id, stock_id,
            },{
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
                message: "Falha ao modificar a venda"
            });
        }
    }

    async delete(req, res){
        const { id } = req.params;

        try{
            const linhas = await Venda.destroy({
                where: { id },
                returning: true
            });

            return res.json(linhas);
        }
        catch (error){
            return res.status(400).send({
                message: "Não foi possível deletar a venda"
            });
        }
    }
}

export default new VendaController();