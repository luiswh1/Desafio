import { Router } from 'express';
import SaldoController from '../controllers/SaldoController';

const routes = new Router();

routes.get(
    '/saldos', 
    SaldoController.index
    // #swagger.description = 'Listagem de saldos'
     // #swagger.tags = ['Saldos']
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Saldo"
            }
        }
     */    
);
routes.get(
    '/saldos/:id', 
    SaldoController.show
    // #swagger.description = 'Obtem um saldo pelo ID'
     // #swagger.tags = ['Saldos']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do saldo',
            required: true,
            type: 'integer'
        }
    */
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/ListaDeSaldos"
            }
        }
     */
    /*
        #swagger.responses[404] = {
            schema: {
                msg: 'Saldo não encontrado'
            }
        }
     */      
);
routes.post(
    '/saldos', 
    SaldoController.store
     // #swagger.description = 'Criar um novo saldo'
     // #swagger.tags = ['Saldos']
     /*
        #swagger.parameters['saldo'] = {
            in: 'body',
            description: "Dados do saldo",
            schema: {
                "$ref": "#/definitions/SaldoCreate"
            }
        }
     */
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do saldo',
            required: true,
            type: 'integer'
        }
    */
    /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Saldo"
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
    '/saldos/:id', 
    SaldoController.update
    // #swagger.description = 'Atualiza os dados de um saldo já criado'
     // #swagger.tags = ['Saldos']
     /*
        #swagger.parameters['saldo'] = {
            in: 'body',
            description: 'Dados do saldo',
            schema: {
                "$ref": "#/definitions/SaldoUpdate"
            }
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Saldo"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Saldo não encontrado"
            }
        }
    */       
);
routes.delete(
    '/saldos/:id', 
    SaldoController.delete
    // #swagger.description = 'Obtem um saldo pelo ID e deleta'
    // #swagger.tags = ['Saldos']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do saldo',
            required: true,
            type: 'integer'
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/SaldoDelete"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha ao deletar o saldo"
            }
        }
    */        
);

export default routes;

// Dev By Luis (Routes)
// Dev By Milene (Documentation)