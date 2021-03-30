import { Router } from 'express';
import VendaController from '../controllers/VendaController';

const routes = new Router();

routes.get(
    '/vendas', 
    VendaController.index
    // #swagger.description = 'Listagem de vendas'
     // #swagger.tags = ['Vendas']
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Venda"
            }
        }
     */    
);
routes.get(
    '/vendas/:id', 
    VendaController.show
    // #swagger.description = 'Obtem uma venda pelo ID'
     // #swagger.tags = ['Vendas']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da venda',
            required: true,
            type: 'integer'
        }
    */
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/ListaDeVendas"
            }
        }
     */
    /*
        #swagger.responses[404] = {
            schema: {
                msg: 'Venda não encontrada'
            }
        }
     */    
);
routes.post(
    '/vendas', 
    VendaController.store
    // #swagger.description = 'Criar uma nova venda'
     // #swagger.tags = ['Vendas']
     /*
        #swagger.parameters['venda'] = {
            in: 'body',
            description: "Dados da venda",
            schema: {
                "$ref": "#/definitions/VendaCreate"
            }
        }
     */
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da venda',
            required: true,
            type: 'integer'
        }
    */
    /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Venda"
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
    '/vendas/:id', 
    VendaController.update
    // #swagger.description = 'Atualiza os dados de uma venda já criada'
     // #swagger.tags = ['Vendas']
     /*
        #swagger.parameters['venda'] = {
            in: 'body',
            description: 'Dados da venda',
            schema: {
                "$ref": "#/definitions/VendaUpdate"
            }
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Venda"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Venda não encontrada"
            }
        }
    */    
);
routes.delete(
    '/vendas/:id', 
    VendaController.delete
    // #swagger.description = 'Obtem uma venda pelo ID e deleta'
    // #swagger.tags = ['Vendas']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da venda',
            required: true,
            type: 'integer'
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/VendaDelete"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha ao deletar a venda"
            }
        }
    */    
);

export default routes;

//Dev By Luis (routes)
//Dev By Milene (documentation)