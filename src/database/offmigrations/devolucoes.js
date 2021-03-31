import { Router } from 'express';
import DevolucaoController from '../controllers/devolucaoController';

const routes = new Router();

routes.get(
    '/devolucoes',
    DevolucaoController.index
    // #swagger.description = 'Listagem de Devoluções'
    // #swagger.tags = ['Devoluções']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeDevolucoes"
           }
       }
    */
);

routes.get(
    '/devolucoes/:id',
    DevolucaoController.show
    // #swagger.description = 'Obtem uma devolução pelo ID'
    // #swagger.tags = ['Devoluções']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id da devolução',
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
       #swagger.responses[404] = {
           schema: {
               msg: 'Devolução não encontrada.'
           }
       }
    */
);

routes.post(
    '/devolucoes',
    DevolucaoController.store
    // #swagger.description = 'Criar uma nova devolução'
    // #swagger.tags = ['Devoluções']
    // #swagger.security = [{JWT: []}]
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
    // #swagger.description = 'Atualizar uma devolução'
    // #swagger.tags = ['Devoluções']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['devolucao'] = {
            in: 'body',
            description: "Dados da devolução",
            schema: {
                "$ref": "#/definitions/DevolucaoUpdated"
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
            msg: "Dados inválidos."
        }
    }
 */
);

routes.delete(
    '/devolucoes/:id',
    DevolucaoController.delete
    // #swagger.description = 'Deleta uma devolução pelo ID'
    // #swagger.tags = ['Devoluções']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id da devolução',
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
       #swagger.responses[404] = {
           schema: {
               msg: 'Devolução não encontrada.'
           }
       }
    */
);

export default routes;
