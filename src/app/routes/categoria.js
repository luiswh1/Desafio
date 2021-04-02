import { Router } from 'express';
import CategoriaController from '../controllers/CategoriaController';

const routes = new Router()

routes.get(
    '/categorias', 
    CategoriaController.index
    // #swagger.description = 'Lista de categorias'
    // #swagger.tags = ['Categorias']
    /*
        #swagger.response[200] = {
            schema: {
                "$ref": "#/definitions/Categoria"
            }
        }
    */  
   /*
        #swagger.response[400] = {
            schema: {
                msg: 'Falha ao exibir categorias'
            }
        }
   */  
);
routes.get(
    '/categorias/:id',
    CategoriaController.show
    // #swagger.description = 'Busca uma categoria pelo ID'
    // #swagger.tags = ['Categorias'] 
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da categoria',
            required: true,
            type: 'integer'
        }
    */   
   /*
        #swegger.responses[200] = {
            schema: {
                "$ref": "#/definitions/ListaDeCategorias"
            }
        }
   */
  /*
    #swagger.responses[404] = {
            schema: {
                msg: 'Categoria não encontrada'
            }
    }   
  */
);
routes.post(
    '/categorias', 
    CategoriaController.store
    // #swagger.description = 'Criar uma nova categoria'
    // #swagger.tags = ['Categorias']
    /*
        #swagger.parameters['categoria'] = {
            in: 'body',
            description: "Dados da categoria",
            schema: {
                "$ref": "#/definitions/CategoriaCreate"
            }
        }
    */
   /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da categoria',
            required: true,
            type: 'integer'
        }
   */
    /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#definitions/Categoria"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Dados inválidos"
            }
        }
   */
);
routes.put(
    '/categorias/:id', 
    CategoriaController.update
    // #swagger.description = 'Atualiza os dados de uma categoria já criada'
     // #swagger.tags = ['Categorias']
     /*
        #swagger.parameters['categoria'] = {
            in: 'body',
            description: 'Dados da categoria',
            schema: {
                "$ref": "#/definitions/CategoriaUpdate"
            }
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Categoria"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Categoria não encontrada"
            }
        }
    */
);
routes.delete(
    '/categorias/:id', 
    CategoriaController.delete
    // #swagger.description = 'Obtem uma categoria pelo ID e a deleta'
    // #swagger.tags = ['Categorias']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da categoria',
            required: true,
            type: 'integer'
        }
    */
   /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/CategoriaDelete"
            }
        }
    */
   /*
        #swagger.responses[400] = {
            schema: {
                msg: "Falha ao deletar a categoria"
            }
        }
    */    
);

export default routes;

//Dev By Luis (routes)
//Dev By Milene (documentation)