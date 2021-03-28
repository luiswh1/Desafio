import { Router } from 'express';
import DevolucaoController from '../controllers/DevolucaoController';

const routes = new Router();

routes.get(
    '/devolucoes', 
    DevolucaoController.index
    // #swagger.description = 'Listagem de devoluções'
     // #swagger.tags = ['Devoluções']
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Devolucao"
            }
        }
     */    
);
routes.get(
    '/devolucoes/:id', 
    DevolucaoController.show
    // #swagger.description = 'Obtem uma devolução pelo ID'
     // #swagger.tags = ['Devoluções']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da devolução',
            required: true,
            type: 'integer'
        }
    */
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/ListaDeDevolucoes"
            }
        }
     */
    /*
        #swagger.responses[404] = {
            schema: {
                msg: 'Devolução não encontrada'
            }
        }
     */
);
routes.post(
    '/devolucoes',
    DevolucaoController.store
    // #swagger.description = 'Criar uma nova devolução'
     // #swagger.tags = ['Devoluções']
     /*
        #swagger.parameters['devolucao'] = {
            in: 'body',
            description: "Dados da devolução",
            schema: {
                "$ref": "#/definitions/DevolucaoCreate"
            }
        }
     */
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da devolução',
            required: true,
            type: 'integer'
        }
    */
    /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Devolucao"
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
    '/devolucoes/:id', 
    DevolucaoController.update
    // #swagger.description = 'Atualiza os dados de uma devolução já criada'
     // #swagger.tags = ['Devoluções']
     /*
        #swagger.parameters['devolucao'] = {
            in: 'body',
            description: 'Dados da devolução',
            schema: {
                "$ref": "#/definitions/DevolucaoUpdate"
            }
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Devolucao"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Devolução não encontrada"
            }
        }
    */    
);
routes.delete(
    '/devolucoes/:id', 
    DevolucaoController.delete
    // #swagger.description = 'Obtem uma devolução pelo ID'
    // #swagger.tags = ['Devoluções']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da devolução',
            required: true,
            type: 'integer'
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/DevolucaoDelete"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha ao deletar a devolução."
            }
        }
    */    
);

export default routes;
