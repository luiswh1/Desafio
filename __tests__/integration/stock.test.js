import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Stock from '../../src/app/models/Stock';


describe('Stocks Tests', () => {
    beforeAll(async () => {
        await truncate();
    });

    it('Should return all stocks', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/stocks');

        expect(result.status).toBe(200);
    });

    it('Should register a new stock', async () => {
        expect.assertions(1);


        const result = await request(app)
            .post('/stocks')
            .send({
                name: 'Mercado Livre' 
            });

        expect(result.status).toBe(201);
    });

    it('Should return a specific stock', async () => {
        expect.assertions(1);

        const stock = await Stock.findOne({
            where: { name: 'Mercado Livre' }
        });

        const result = await request(app)
            .get(`/stocks/${stock.id}`)

        expect(result.status).toBe(200);
    });

    it('Should update a stock', async () => {
        expect.assertions(1);
        const result = await request(app)
            .put(`/stocks/1`)
            .send({
                name: 'Wallmart'
            });
        
            expect(result.status).toBe(200);
    });

    it('Should Delete a stock', async () => {
        expect.assertions(1);
        const result = await request(app)
            .delete(`/stocks/1`);
        
            expect(result.status).toBe(200);
    });


});