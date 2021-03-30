import Categoria from '../models/Categoria';


class CategoriaController {
    async index(req, res) {
        try{
        const categorias = await Categoria.findAll({
          
        });

        return res.json(categorias);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao exibir categorias"
            });
        }
    }

    async show(req, res) {
        const { id } = req.params;

        try{
            const categoria = await Categoria.findByPk(id, {
         
            });

            return res.json(categoria);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao exibir categoria"
            });
        }
    }

    async store(req, res) {
        const { name } = req.body;

        try{
            const categoria = await Categoria.create({
                name
            });

            return res.status(201).json(categoria);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha no cadastro de categoria"
            });
        }
    }

    async update(req, res) {
        const { name } = req.body;
        const { id } = req.params;

        try{
        const [linhas, objetos] = await Categoria.update({
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
                message: "Falha ao modificar categoria"
            });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try{
        const linhas = await Categoria.destroy({
            where: { id },
            returning: true
        });

        return res.json(linhas);
        }
        catch (error){
            return res.status(400).send({
                message: "Falha ao deletar cateforia"
            });
        }
    }
}

export default new CategoriaController();

//Dev By Luis