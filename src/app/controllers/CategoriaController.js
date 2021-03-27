import Categoria from '../models/Categoria';
import Produto from '../models/Produto';

class CategoriaController {
    async index(req, res) {

        const categorias = await Categoria.findAll({
            
        });

        return res.json(categorias);
    }
}

export default new CategoriaController();