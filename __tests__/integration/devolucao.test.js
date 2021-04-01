import request from 'supertest';
import app from '../../src/app';
import truncate from '../utils/truncate';
import Produto from '../../src/app/models/Produto';
import Stock from '../../src/app/models/Stock';
import Categoria from '../../src/app/models/Categoria';
import Devolucao from '../../src/app/models/Devolucao';


describe('Devolution Tests', () => {
    jest.setTimeout(80000);
    beforeAll(async () => {
        await truncate();

        const criarStock = await Stock.create({
            name: 'Mercado Livre'
        });

        const criarCategoria = await Categoria.create({
            name: 'Eletronicos'
        });

        const criarProduto = await Produto.create({
            name: "Mouse Razer",
            stock_id: criarStock.id,
            categoria_id: criarCategoria.id
        });
    });

    
    it('Should create a new devolution', async () => {
        expect.assertions(1);

        const buscarStock = await Stock.findOne({
            where: { name: 'Mercado Livre' }
        });

        const buscarProduto = await Produto.findOne({
            where: { name: 'Mouse Razer' }
        });

        

        const result = await request(app)
            .post('/devolucoes')
            .send({
                stock_id: buscarStock.id,
                produto_id: buscarProduto.id,
                motivo: 'Produto com defeito de fabrica.',
                created_at: new Date()
            });

        expect(result.status).toBe(201);
    });

    it('Should return all devolutions', async () => {
        expect.assertions(1)

        const result = await request(app)
            .get('/devolucoes')

            expect(result.status).toBe(200);
    });

    it('Should return a specific devolution', async () => {
        expect.assertions(1);
 
        const buscarProduto = await Produto.findOne({
            where: { name: 'Mouse Razer' }
        });
         const buscarDevolucao = await Devolucao.findOne({
             where: { produto_id: buscarProduto.id }
         });
         
         const result = await request(app)
             .get(`/devolucoes/${buscarDevolucao.id}`);
         
             expect(result.status).toBe(200);

     });

     it('Should update a devolution', async () => {
        expect.assertions(1);
 
        const buscarProduto = await Produto.findOne({
            where: { name: 'Mouse Razer' }
        });
         const buscarDevolucao = await Devolucao.findOne({
             where: { produto_id: buscarProduto.id }
         });
         
         const result = await request(app)
             .put(`/devolucoes/${buscarDevolucao.id}`)
             .send({
                 created_at: new Date()
             });
         
             expect(result.status).toBe(200);

     });

     it('Should delete a devolution', async () => {
        expect.assertions(1);
 
        const buscarProduto = await Produto.findOne({
            where: { name: 'Mouse Razer' }
        });
         const buscarDevolucao = await Devolucao.findOne({
             where: { produto_id: buscarProduto.id }
         });
         
         const result = await request(app)
             .delete(`/devolucoes/${buscarDevolucao.id}`)
                     
             expect(result.status).toBe(200);

     });
    
});

//Dev By Luis
