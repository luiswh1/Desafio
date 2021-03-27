import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController';

const routes = new Router();

routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.show);
routes.post('/produtos', ProdutoController.store);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

export default routes;