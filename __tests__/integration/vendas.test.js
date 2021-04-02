import request from 'supertest';
import app from '../../src/app';
import Categoria from '../../src/app/models/Categoria';
import Produto from '../../src/app/models/Produto';
import truncate from '../utils/truncate';
import Stock from '../../src/app/models/Stock';
import Vendas from '../../src/app/models/Vendas';
import Saldo from '../../src/app/models/Saldo';

describe('Sales tests', () => {
    jest.setTimeout(80000);
    beforeAll(async () => {
        await truncate();


        const criarCategoria = await Categoria.create({
            name: 'Produto Eletronico'
        });

        const criarStock = await Stock.create({
            name: 'Growdev'
        });


        const criarProduto = await Produto.create({
            name: 'Teclado',
            stock_id: criarStock.id,
            categoria_id: criarCategoria.id
        });

        const criarSaldo = await Saldo.create({
            stock_id: criarStock.id,
            produto_id: criarProduto.id,
            quantidade: 1,
            created_at: new Date()
        })
    });

    it('Should create a new sale', async () => {
        expect.assertions(1);

        const buscarStock = await Stock.findOne({
            where: { name: 'Growdev' }
        });

        const buscarCategoria = await Categoria.findOne({
            where: { name: 'Produto Eletronico' }
        });

        const buscarProduto = await Produto.findOne({
            where: { name: 'Teclado' }
        });

        const buscaSaldo = await Saldo.findOne({
            where: { quantidade: 1 }
        })

        const result = await request(app)
            .post('/vendas')
            .send({
                produto_id: buscarProduto.id,
                stock_id: buscarStock.id,
                created_at: new Date()
            });

        expect(result.status).toBe(201);
    });

    it('Should return all salles', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/vendas')
        expect(result.status).toBe(200);
    });

    it('Should return a specific salle', async () => {
        expect.assertions(1);

        const buscarProduto = await Produto.findOne({
            where: { name: 'Teclado' }
        });

        const result = await request(app)
            .get(`/vendas/${buscarProduto.id}`);

            expect(result.status).toBe(200);
    });

    it('Should update a salle', async () => {
        expect.assertions(1);

        const buscarProduto = await Produto.findOne({
            where: { name: 'Teclado' }
        });

        const result = await request(app)
            .put(`/vendas/${buscarProduto.id}`)
            .send({
                created_at: new Date()
            });

            expect(result.status).toBe(200);
    });

    it('Should delete a salle', async () => {
        expect.assertions(1);

        const buscarProduto = await Produto.findOne({
            where: { name: 'Teclado' }
        });

        const result = await request(app)
            .put(`/vendas/${buscarProduto.id}`);

            expect(result.status).toBe(200);
    });

});