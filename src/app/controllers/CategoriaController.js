import Categoria from '../models/Categoria';
import Produto from '../models/Produto';

class CategoriaController {
    async index(req, res) {

        const categorias = await Categoria.findAll({
            
        });

        return res.json(categorias);
    }

    async show(req, res) {
        const { id } = req.params;

        const categoria = await Categoria.findByPk(id);

        return res.json(categoria);
    }

    async store(req, res) {
        const { name } = req.body;

        const categoria = await Categoria.create({
            name
        });

        return res.json(categoria);
    }

    async update(req, res) {
        const { name } = req.body;
        const { id } = req.params;

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

    async delete(req, res) {
        const { id } = req.params;

        const linhas = await Categoria.destroy({
            where: { id },
            returning: true
        });

        return res.json(linhas);
    }
}

export default new CategoriaController();