import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Produto from '../../src/app/models/Produto';


describe('Categories Tests', () => {
    beforeAll(async () => {
        await truncate();
    });
    it('Should create a new product', async () => {
        expect.assertions(1);

        const result = await request(app)
            .post('/produtos')
            .send({
                name: 'Mouse Razer',
                stock_id: '3',
                categoria_id: '2',
            });

        expect(result.status).toBe(200);
    });
});