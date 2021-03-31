import Saldo from '../models/Saldo';
import Venda from '../models/Vendas';
import Stock from '../models/Stock';

class SaldoController{
    async index(req, res){
        const saldo = await Saldo.findAll({
            include:[
                {
                    model: Stock,
                },
                {
                    model: Venda,
                },
            ]
        });

        return res.json(saldo);
    }

    async show(req, res){
        const { id } = req.params;

        const saldo = await Saldo.findByPk(id, {
            include:[
                {
                    model: Stock,
                },
                {
                    model: Venda,
                },
            ]
        });

        return res.json(saldo);
    }

    async store(req, res){
        const { venda_id, stock_id, quantidade, created_at } = req.body;

        const saldo = await Saldo.create({
            venda_id, stock_id, quantidade, created_at
        });

        return res.status(201).json(saldo);
    }

    async update(req, res){
        const { id } = req.params;
        const { venda_id, stock_id, quantidade, created_at } = req.body;

        const[linhas, objetos] = await Saldo.update({
            venda_id, stock_id, quantidade, created_at,
        },{
            where: { id },
            returning: true
        });

        return res.json({
            linhas, objetos
        });
    }

    async delete(req, res){
        const { id } = req.params;

        const saldo = await Saldo.destroy({
            where: { id },
            returning: true
        });

        return res.json(saldo);
    }
}

export default new SaldoController();