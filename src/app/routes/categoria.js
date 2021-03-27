import { Router } from 'express';
import CategoriaController from '../controllers/CategoriaController';

const routes = new Router()

routes.get('/categorias', CategoriaController.index);
routes.get('/categorias/:id', CategoriaController.show);
routes.post('/categorias', CategoriaController.store);
routes.put('/categorias/:id', CategoriaController.update);
routes.delete('/categorias/:id', CategoriaController.delete);

export default routes;