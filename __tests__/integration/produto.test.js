import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Produto from '../../src/app/models/Produto';
import Categoria from '../../src/app/models/Categoria';
import Stock from '../../src/app/models/Stock';




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

    it('Should register a new product', async () => {
        expect.assertions(1);
        
        const buscarStock = await Stock.findOne({
            where: { name: 'GrowDev' }
        });

        const buscarCategoria = await Categoria.findOne({
            where: { name: 'Desenvolvimento de Software' }
        });

        const result = await request(app)
            .post('/produtos')
            .send({
                name: "ReactJS",
                stock_id: buscarStock.id,
                categoria_id: buscarCategoria.id
            });


        expect(result.status).toBe(201);
    });
    
    it('Should return all products', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/produtos')

        expect(result.status).toBe(200)

    });



    it('Should return a specific product', async () => {
        expect.assertions(2);

        const produto = await Produto.findOne({
            where: { name: 'ReactJS' }
        });

        const result = await request(app)
            .get(`/produtos/${produto.id}`)



        expect(result.status).toBe(200);
        expect(result.body.name).toBe('ReactJS');

    });

    it('Should update a product', async () => {
        expect.assertions(1);

        const produto = await Produto.findOne({
            where: { name: 'ReactJS' }
        });

        const result = await request(app)
            .put(`/produtos/${produto.id}`)
            .send({
                name: 'NodeJS'
            });

        expect(result.status).toBe(200);
    });

    it('Should Delete a product', async () => {
        expect.assertions(1);

        const produto = await Produto.findOne({
            where: { name: 'VueJS' }
        });

        const result = await request(app)
            .delete(`/produtos/${produto.id}`);

        expect(result.status).toBe(200);
    });
});

//Dev By Luis