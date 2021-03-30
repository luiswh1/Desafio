import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Produto from '../../src/app/models/Produto';
import Stock from '../../src/app/models/Stock';
import Categoria from '../../src/app/models/Categoria';
import Devolucao from '../../src/app/models/Devolucao';

describe('Devolution Tests', () => {
    beforeAll(async () => {
        await truncate();
    });

    it('Should return all devolutions', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/devolucoes');

        expect(result.status).toBe(200);
    });
    it('Should create a new devolution', async () => {
        expect.assertions(1);

        const stock = await Stock.create({
            name: 'Growdev'
        });

        const categoria = await Categoria.create({
            name: 'Alimentos'
        });

        const produto = await Produto.create({
            name: "Mouse Razer",
            stock_id: stock.id,
            categoria_id: categoria.id
        });

        const result = await request(app)
            .post('/devolucoes')
            .send({
                stock_id: stock.id,
                produto_id: produto.id,
                motivo: 'Produto com defeito de fabrica.',
                created_at: new Date()
            });

        expect(result.status).toBe(201);
    });

    it('Should return a specific devolution', async () => {
        expect.assertions(1);

        const devolucao = await Devolucao.findOne({
            where: { motivo: 'Produto com defeito de fabrica.' }
        });

        const result = await request(app)
            .get(`/devolucoes/${devolucao.id}`)

        expect(result.status).toBe(200);
    });

    it('Should update a devolution', async () => {
        expect.assertions(1);
        const result = await request(app)
            .put(`/devolucoes/1`)
            .send({
                motivo: 'Produto de má qualidade.'
            })
        
            expect(result.status).toBe(200);
    });

    it('Should Delete a devolution', async () => {
        expect.assertions(1);
        const result = await request(app)
            .delete(`/devolucoes/1`);
        
            expect(result.status).toBe(200);
    });

});
