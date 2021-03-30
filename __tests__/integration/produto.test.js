import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Produto from '../../src/app/models/Produto';
import Categoria from '../../src/app/models/Categoria';
import Stock from '../../src/app/models/Stock';




describe('Product Tests', () => {
    beforeAll(async () => {
        await truncate();


    });

    it('Should return all products', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/produtos')

        expect(result.status).toBe(200)

    });

    it('Should register a new product', async () => {
        expect.assertions(1);
        const categoria = await Categoria.create({
            name: 'Alimentos'
        })

        const stock = await Stock.create({
            name: 'Growdev'
        });
        const result = await request(app)
            .post('/produtos')
            .send({
                name: "PinBall",
                stock_id: stock.id,
                categoria_id: categoria.id
            });


        expect(result.status).toBe(201);
    });

    it('Should return a specific product', async () => {
        expect.assertions(3);

        const produto = await Produto.findOne({
            where: { name: 'PinBall' }
        });

        const result = await request(app)
            .get(`/produtos/${produto.id}`)
        


            expect(result.status).toBe(200);
            expect(result.body.id).toBeDefined();
            expect(result.body.name).toBe('PinBall');
    
    });

    it('Should update a product', async () => {
        expect.assertions(1);
        const result = await request(app)
            .put(`/produtos/1`)
            .send({
                name: 'Teclado Razer'
            })
        
            expect(result.status).toBe(200);
    });

    it('Should Delete a product', async () => {
        expect.assertions(1);
        const result = await request(app)
            .delete(`/produtos/1`);
        
            expect(result.status).toBe(200);
    });
});