import { Router } from 'express';
import VendaController from '../controllers/VendaController';

const routes = new Router();

routes.get('/vendas', VendaController.index);
routes.get('/vendas/:id', VendaController.show);
routes.post('/vendas', VendaController.store);
routes.put('/vendas/:id', VendaController.update);
routes.delete('/vendas/:id', VendaController.delete);

export default routes;