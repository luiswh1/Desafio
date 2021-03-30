import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController';

const routes = new Router();

routes.get(
    '/produtos', 
    ProdutoController.index
    // #swagger.description = 'Listagem de produtos'
     // #swagger.tags = ['Produtos']
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Produto"
            }
        }
     */    
);
routes.get(
    '/produtos/:id', 
    ProdutoController.show
    // #swagger.description = 'Obtem um produto pelo ID'
     // #swagger.tags = ['Produtos']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do produto',
            required: true,
            type: 'integer'
        }
    */
     /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/ListaDeProdutos"
            }
        }
     */
    /*
        #swagger.responses[404] = {
            schema: {
                msg: 'Produto não encontrado.'
            }
        }
     */    
);
routes.post(
    '/produtos', 
    ProdutoController.store
    // #swagger.description = 'Criar um novo produto'
     // #swagger.tags = ['Produtos']
     /*
        #swagger.parameters['produto'] = {
            in: 'body',
            description: "Dados do produto",
            schema: {
                "$ref": "#/definitions/ProdutoCreate"
            }
        }
     */
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do produto',
            required: true,
            type: 'integer'
        }
    */
    /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Produto"
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
    '/produtos/:id', 
    ProdutoController.update
    // #swagger.description = 'Atualiza os dados de um produto já criado'
     // #swagger.tags = ['Produtos']
     /*
        #swagger.parameters['produto'] = {
            in: 'body',
            description: 'Dados do produto',
            schema: {
                "$ref": "#/definitions/ProdutoUpdate"
            }
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Produto"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Produto não encontrado."
            }
        }
    */    
);
routes.delete(
    '/produtos/:id', 
    ProdutoController.delete
    // #swagger.description = 'Obtem um produto pelo ID e deleta'
    // #swagger.tags = ['Produtos']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do produto',
            required: true,
            type: 'integer'
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/ProdutoDelete"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha ao deletar o produto"
            }
        }
    */    
);

export default routes;

//Dev By Luis (routes)
//Dev By Milene (documentation)