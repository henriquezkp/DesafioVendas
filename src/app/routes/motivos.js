import { Router } from 'express';
import MotivoController from '../controllers/motivoController';

const routes = new Router();

routes.get(
    '/motivos',
    MotivoController.index
    // #swagger.description = 'Listagem de Motivos'
    // #swagger.tags = ['Motivos']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeMotivos"
           }
       }
    */
);

routes.get(
    '/motivos/:id',
    MotivoController.show
    // #swagger.description = 'Obtem um motivo pelo ID'
    // #swagger.tags = ['Motivos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do motivo',
            required: true,
            type: 'integer' 
        }
    */
    /*
        #swagger.responses[200] = {
            schema: {
                "$ref": "#/definitions/Motivo"
            }
        }
     */
    /*
       #swagger.responses[404] = {
           schema: {
               msg: 'Motivo não encontrado.'
           }
       }
    */
);

routes.post(
    '/motivos',
    MotivoController.store
    // #swagger.description = 'Criar um novo motivo'
    // #swagger.tags = ['Motivos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['motivo'] = {
            in: 'body',
            description: "Dados do motivo",
            schema: {
                "$ref": "#/definitions/MotivoCreate"
            }
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Motivo"
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
    '/motivos/:id',
    MotivoController.update
    // #swagger.description = 'Atualizar um motivo'
    // #swagger.tags = ['Motivos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['motivo'] = {
            in: 'body',
            description: "Dados do motivo",
            schema: {
                "$ref": "#/definitions/MotivoUpdated"
            }
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Motivo"
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
    '/motivos/:id',
    MotivoController.delete
    // #swagger.description = 'Deleta um motivo pelo ID'
    // #swagger.tags = ['Motivos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do motivo',
            required: true,
            type: 'integer' 
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/MotivoDelete"
           }
       }
    */
    /*
       #swagger.responses[404] = {
           schema: {
               msg: 'Motivo não encontrado.'
           }
       }
    */
);

export default routes;
