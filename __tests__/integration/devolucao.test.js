import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Devolucao from '../../src/app/models/Devolucao';

describe('Devolution Tests', () => {
    beforeAll(async () => {
        await truncate();
    });

    it('Should create a new devolution', async () => {
        expect.assertions(2)
        const result = await request(app)
            .post('/devolucoes')
            .send({
                stock_id: 1,
                produto_id: 1,
                motivo: 'produto com defeito.',
                created_at: new Date()
            });

        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('id');
    });

    it('Should return all devolutions', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/devolucoes')

        expect(result.status).toBe(200);
      //  expect(result.body.length).toBeGreaterThan(0);
    });

});
