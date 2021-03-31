import { Router } from 'express';
import EstoqueTotalController from '../controllers/estoqueTotalController';

const routes = new Router();

routes.get(
    '/estoquetotal',
    EstoqueTotalController.index
    // #swagger.description = 'Listagem de estoquetotal'
    // #swagger.tags = ['estoquetotal']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeestoquetotal"
           }
       }
    */
);

routes.get(
    '/estoquetotal/:id',
    EstoqueTotalController.show
    // #swagger.description = 'Obtem um estoque pelo ID'
    // #swagger.tags = ['estoquetotal']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do estoque',
            required: true,
            type: 'integer' 
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Estoque"
           }
       }
    */
    /*
       #swagger.responses[404] = {
           schema: {
               msg: 'Estoque não encontrado.'
           }
       }
    */
);

routes.post(
    '/estoquetotal',
    EstoqueTotalController.store
    // #swagger.description = 'Criar um novo estoque'
    // #swagger.tags = ['estoquetotal']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['estoque'] = {
            in: 'body',
            description: "Dados do estoque",
            schema: {
                "$ref": "#/definitions/EstoqueCreate"
            }
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Estoque"
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
    '/estoquetotal/:id',
    EstoqueTotalController.update
    // #swagger.description = 'Atualizar um estoque'
    // #swagger.tags = ['estoquetotal']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['estoque'] = {
            in: 'body',
            description: "Dados do estoque",
            schema: {
                "$ref": "#/definitions/EstoqueUpdated"
            }
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Estoque"
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
    '/estoquetotal/:id',
    EstoqueTotalController.delete
    // #swagger.description = 'Deleta um estoque pelo ID'
    // #swagger.tags = ['Estoques']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do estoque',
            required: true,
            type: 'integer' 
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/EstoqueDelete"
           }
       }
    */
    /*
       #swagger.responses[404] = {
           schema: {
               msg: 'Estoque não encontrado.'
           }
       }
    */
);

export default routes;

