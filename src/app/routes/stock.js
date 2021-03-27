import { Router } from 'express';
import StockController from '../controllers/StockConttroller';

const routes = new Router();

routes.get('/stocks', StockController.index);

export default routes;