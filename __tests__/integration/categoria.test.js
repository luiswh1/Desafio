import request from 'supertest';
import app from '../../src/app';
import Categoria from '../../src/app/models/Categoria';
import truncate from '../utils/truncate';



describe('Categories Tests', () => {
    jest.setTimeout(80000);
    beforeAll(async () => {
        await truncate();

        const categoriaTeste = await Categoria.create({
            name: 'Eletronicos'
        });
    });


    it('Should create a new categorie', async () => {
        expect.assertions(1);

        const result = await request(app)
            .post('/categorias')
            .send({
                name: 'Alimentos'
            });
        
        expect(result.status).toBe(201);
    });

    it('Should return all categories', async () => {
        expect.assertions(1);

        const result = await request(app)
            .get('/categorias')
        expect(result.status).toBe(200);
    });


    it('Should return a specific categorie', async () => {
       expect.assertions(3);

        const buscarCategoria = await Categoria.findOne({
            where: { name: 'Eletronicos' }
        });


        const result = await request(app)
            .get(`/categorias/${buscarCategoria.id}`);
        
            expect(result.status).toBe(200);
            expect(result.body.id).toBeDefined();
            expect(result.body.name).toBe('Eletronicos');
    
    });

    it('Should update a categorie', async () => {
        expect.assertions(1);

        const buscarCategoria = await Categoria.findOne({
            where: { name: 'Eletronicos' }
        });

        const result = await request(app)
            .put(`/categorias/${buscarCategoria.id}`)
            .send({
                name: 'Tecnologia'
            })
        
            expect(result.status).toBe(200);
    });

    it('Should Delete a categorie', async () => {
        expect.assertions(1);

        const buscarCategoria = await Categoria.findOne({
            where: { name: 'Alimentos' }
        });


        const result = await request(app)
            .delete(`/categorias/${buscarCategoria.id}`);
        
            expect(result.status).toBe(200);
    });
});

//Dev By Luis
//Dev By Pedro