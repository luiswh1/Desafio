import { Router } from 'express';
import StockController from '../controllers/StockController';

const routes = new Router();

routes.get(
    '/stocks', 
    StockController.index
    // #swagger.description = 'Listagem de stocks'
     // #swagger.tags = ['Stocks']
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Stock"
            }
        }
     */    
);
routes.get(
    '/stocks/:id', 
    StockController.show
    // #swagger.description = 'Obtem um stock pelo ID'
     // #swagger.tags = ['Stocks']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do stock',
            required: true,
            type: 'integer'
        }
    */
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/ListaDeStocks"
            }
        }
     */
    /*
        #swagger.responses[404] = {
            schema: {
                msg: 'Stock não encontrado.'
            }
        }
     */
);
routes.post(
    '/stocks', 
    StockController.store
    // #swagger.description = 'Criar um novo stock'
     // #swagger.tags = ['Stocks']
     /*
        #swagger.parameters['stock'] = {
            in: 'body',
            description: "Dados do stock",
            schema: {
                "$ref": "#/definitions/StockCreate"
            }
        }
     */
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do stock',
            required: true,
            type: 'integer'
        }
    */
    /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Stock"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Dados inválidos."
            }
        }
    */    
);
routes.put(
    '/stocks/:id', 
    StockController.update
    // #swagger.description = 'Atualiza os dados de um stock já criado'
     // #swagger.tags = ['Stocks']
     /*
        #swagger.parameters['stock'] = {
            in: 'body',
            description: 'Dados do stock',
            schema: {
                "$ref": "#/definitions/StockUpdate"
            }
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Stock"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Stock não encontrado."
            }
        }
    */
);
routes.delete(
    '/stocks/:id', 
    StockController.delete
    // #swagger.description = 'Obtem um stock pelo ID e deleta'
    // #swagger.tags = ['Stocks']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do stock',
            required: true,
            type: 'integer'
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/StockDelete"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha ao deletar o stock"
            }
        }
    */
);

export default routes;