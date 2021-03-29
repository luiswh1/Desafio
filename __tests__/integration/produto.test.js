import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Produto from '../../src/app/models/Produto';



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

    it('Should register a new product', async() => {
        expect.assertions(1);

        const product = await request(app)
            .post('/produtos')
            .send({
                name: "PinBall",
                stock_id: 123,
                categoria_id: 123
              });

            console.log(product)
            expect(product.status).toBe(201);
    })
});