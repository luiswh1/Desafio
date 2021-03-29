import Produto from '../models/Produto';
import Stock from '../models/Stock';
import Categoria from '../models/Categoria'; 
class ProdutoController {
  
    async index(req, res) {
        try{
            const produto = await Produto.findAll({
                include: [
                    {
                        model: Stock,

                    },
                    {
                        model: Categoria,
                        as: 'Categoria' //Requisiçao GET aparecendo um "categorium" inves de categoria
                      
                    }
                ]
            });

            return res.json(produto);
        }
        catch (error){
            return res.status(400).send({
                message: "Produtos não encontrados"
            });
        }
    }

    async show (req, res) {
        const { id } = req.params;

        try {
            const produto = await Produto.findByPk(id, {
                include: [
                    {
                        model: Stock,

                    },
                    {
                        model: Categoria,
                        as: 'Categoria'
                    }
                ]});

            return res.json(produto);
        }
        catch (error){
            return res.status(404).send({
                message: "Produto não encontrado"
            });
        }
    }

    async store(req, res){
        const { 
            name,
            stock_id,
            categoria_id,
        } = req.body;

        try{
            const produto = await Produto.create({
                name,
                stock_id,
                categoria_id,
            });

            return res.json(produto);
        }
        catch(error){
            return res.status(400).send({
                message: "Falha ao cadastrar produto"
            });
        }
    }

    async update(req, res){
        const { name } = req.body;
        const { id } = req.params;

        try{
            const [linhas, objetos] = await Produto.update({
                name,
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
                message: "Falha ao modificar o produto"
            });
        }
    }

    async delete(req, res){
        const { id } = req.params;

        try{
            const linhas = await Produto.destroy({
                where: { id },
                returning: true
            });

            return res.json(linhas);
        }
        catch (error){
            return res.status(400).send({
                message: "Não foi possível deletar o produto"
            });
        }
    }
}

export default new ProdutoController();