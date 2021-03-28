import { Router } from 'express';
import StockController from '../controllers/StockController';

const routes = new Router();

routes.get('/stocks', StockController.index);
routes.get('/stocks/:id', StockController.show);
routes.post('/stocks', StockController.store);
routes.put('/stocks/:id', StockController.update);
routes.delete('/stocks/:id', StockController.delete);

export default routes;