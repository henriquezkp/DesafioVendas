import { Router } from 'express';
import TipoMovimentacaoController from '../controllers/tipoMovimetacaoController';

const routes = new Router();

routes.get(
    '/tipos',
    TipoMovimentacaoController.index
    // #swagger.description = 'Listagem dos Tipos de Movimentações'
    // #swagger.tags = ['Tipos']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeTipos"
           }
       }
    */
);

routes.get(
    '/tipos/:id',
    TipoMovimentacaoController.show
    // #swagger.description = 'Obtem um tipo de movimentação pelo ID'
    // #swagger.tags = ['Tipos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do tipo de movimentação',
            required: true,
            type: 'integer' 
        }
    */
    /*
     /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Tipo"
           }
       }
    */
    /*
       #swagger.responses[404] = {
           schema: {
               msg: 'Tipo de movimentação não encontrado.'
           }
       }
    */
);

routes.post(
    '/tipos',
    TipoMovimentacaoController.store
    // #swagger.description = 'Criar um novo tipo de movimentação'
    // #swagger.tags = ['Tipos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['tipo'] = {
            in: 'body',
            description: "Dados do tipo de movimentação",
            schema: {
                "$ref": "#/definitions/TipoCreate"
            }
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Tipo"
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
    '/tipos/:id',
    TipoMovimentacaoController.update
    // #swagger.description = 'Atualizar um tipo de movimentação'
    // #swagger.tags = ['Tipos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['tipo'] = {
            in: 'body',
            description: "Dados do tipo de movimentação",
            schema: {
                "$ref": "#/definitions/TipoUpdated"
            }
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Tipo"
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
    '/tipos/:id',
    TipoMovimentacaoController.delete
    // #swagger.description = 'Deleta um tipo de movimentação pelo ID'
    // #swagger.tags = ['Tipos']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do tipo de movimentação',
            required: true,
            type: 'integer' 
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/TipoDelete"
           }
       }
    */
    /*
       #swagger.responses[404] = {
           schema: {
               msg: 'Tipo de movimentação não encontrado.'
           }
       }
    */
);

export default routes;
