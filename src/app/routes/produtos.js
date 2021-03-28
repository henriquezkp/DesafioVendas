import { Router } from 'express';
import ProdutoController from '../controllers/produtoController';

const routes = new Router();

routes.get(
    '/produtos',
    ProdutoController.index
    // #swagger.description = 'Listagem de Produtos'
    // #swagger.tags = ['Produtos']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeProdutos"
           }
       }
    */
);

routes.get(
    '/produtos/:id',
    ProdutoController.show
    // #swagger.description = 'Obtem um produto pelo ID'
    // #swagger.tags = ['Produtos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do produto',
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
    // #swagger.security = [{JWT: []}]
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
    // #swagger.description = 'Atualizar um produto'
    // #swagger.tags = ['Produtos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['produto'] = {
            in: 'body',
            description: "Dados do produto",
            schema: {
                "$ref": "#/definitions/ProdutoUpdated"
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
            msg: "Dados inválidos."
        }
    }
 */
);

routes.delete(
    '/produtos/:id',
    ProdutoController.delete
    // #swagger.description = 'Deleta um produto pelo ID'
    // #swagger.tags = ['Produtos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do produto',
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
       #swagger.responses[404] = {
           schema: {
               msg: 'Produto não encontrado.'
           }
       }
    */
);

export default routes;
