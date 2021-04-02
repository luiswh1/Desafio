import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Produto from '../../src/app/models/Produto';
import Categoria from '../../src/app/models/Categoria';
import Stock from '../../src/app/models/Stock';
import Saldo from '../../src/app/models/Saldo';




describe('Product Tests', () => {
    jest.setTimeout(80000);
    beforeAll(async () => {
        await truncate();

        const criarStock = await Stock.create({
            name: 'GrowDev'
        });

        const criarCategoria = await Categoria.create({
            name: 'Desenvolvimento de Software'
        });

        const criarProduto = await Produto.create({
            name: 'VueJS',
            stock_id: criarStock.id,
            categoria_id: criarCategoria.id
        });


    });

    it('Should create a new Balance', async () => {
        expect.assertions(1);

        const buscarStock = await Stock.findOne({
            where: { name: 'GrowDev' }
        });

        const buscarProduto = await Produto.findOne({
            where: { name: 'VueJS' }
        });
        
            const result = await request(app)
            .post('/saldos')
            .send({
                stock_id: buscarStock.id,
                produto_id: buscarProduto.id,
                quantidade: 1
              
            });

            expect(result.status).toBe(201);
    });

    it('Should return all registered Balances', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/saldos')

        expect(result.status).toBe(200)

    });

    it('Should return a specific Balance', async () => {
        expect.assertions(1);

        const buscarProduto = await Produto.findOne({
            where: { name: 'VueJS' }
        });

        const saldo = await Saldo.findOne({
            where: { produto_id: buscarProduto.id }
        });

        const result = await request(app)
            .get(`/saldos/${saldo.id}`)



        expect(result.status).toBe(200);
    
    });

    it('Should update a Balance', async () => {
        expect.assertions(1);

        const buscarProduto = await Produto.findOne({
            where: { name: 'VueJS' }
        });

        const saldo = await Saldo.findOne({
            where: { produto_id: buscarProduto.id }
        });

        const result = await request(app)
            .put(`/saldos/${saldo.id}`)
            .send({
                quantidade: 3
            });

        expect(result.status).toBe(200);
    });

    it('Should Delete a Balance', async () => {
        expect.assertions(1);

        const buscarProduto = await Produto.findOne({
            where: { name: 'VueJS' }
        });

        const saldo = await Saldo.findOne({
            where: { produto_id: buscarProduto.id }
        });

        const result = await request(app)
            .delete(`/saldos/${saldo.id}`);

        expect(result.status).toBe(200);
    });
});
    
