import Produto from '../models/Produto';
import Stock from '../models/Stock';
import Categoria from '../models/Categoria'; 
import Saldo from '../models/Saldo';
class ProdutoController {
  
    async index(req, res) {
        //try{
            const produto = await Produto.findAll({
                include: [
                    {
                        model: Stock,

                    },
                    {
                        model: Categoria,
                        as: 'Categoria' 
                      
                    }
                ]
            });

            return res.json(produto);
        /*}
        catch (error){
            return res.status(400).send({
                message: "Produtos não encontrados"
            });
        }*/
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

        //try{

              const produto = await Produto.create({
                name,
                stock_id,
                categoria_id,
            });   
                 
            if(produto) {
                const adicionarSaldo = await Saldo.create({
                   stock_id: produto.stock_id,
                   produto_id: produto.id,
                   quantidade: 1,
                   created_at: new Date()
                });
            }
            return res.status(201).json(produto);
        /*}
        catch(error){
            console.log(error)
            return res.status(400).send({
                message: "Falha ao cadastrar produto"
            });
        }*/
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

            return res.status(200).json(linhas);
        }
        catch (error){
            console.log(error.message);
            return res.status(500).send({
                message: "Não foi possível deletar o produto"
            });
        }
    }
}

export default new ProdutoController();

//Dev By Luis