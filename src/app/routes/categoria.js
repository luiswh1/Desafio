import { Router } from 'express';
import CategoriaController from '../controllers/CategoriaController';

const routes = new Router()

routes.get('/categorias', CategoriaController.index);

export default routes;