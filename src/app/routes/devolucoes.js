import { Router } from 'express';
import DevolucaoController from '../controllers/DevolucaoController';

const routes = new Router();

routes.get('/devolucoes', DevolucaoController.index);
routes.get('/devolucoes/:id', DevolucaoController.show);
routes.post('/devolucoes', DevolucaoController.store);
routes.put('/devolucoes/:id', DevolucaoController.update);
routes.delete('/devolucoes/:id', DevolucaoController.delete);

export default routes;