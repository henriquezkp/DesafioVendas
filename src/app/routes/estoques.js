import { Router } from 'express';
import EstoqueController from '../controllers/estoqueController';

const routes = new Router();

routes.get(
    '/estoques',
    EstoqueController.index
    // #swagger.description = 'Listagem de Estoques'
    // #swagger.tags = ['Estoques']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeEstoques"
           }
       }
    */
);

routes.get(
    '/estoques/:id',
    EstoqueController.show
    // #swagger.description = 'Obtem um estoque pelo ID'
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
    '/estoques',
    EstoqueController.store
    // #swagger.description = 'Criar um novo estoque'
    // #swagger.tags = ['Estoques']
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
    '/estoques/:id',
    EstoqueController.update
    // #swagger.description = 'Atualizar um estoque'
    // #swagger.tags = ['Estoques']
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
    '/estoques/:id',
    EstoqueController.delete
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

