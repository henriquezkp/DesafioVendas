import { Router } from 'express';
import MovimentacaoController from '../controllers/movimentacaoController';

const routes = new Router();

routes.get(
    '/movimentacoes',
    MovimentacaoController.index
    // #swagger.description = 'Listagem de Movimentações
    // #swagger.tags = ['Movimentações']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeMovimentacoes"
           }
       }
    */
);

routes.get(
    '/movimentacoes/:id',
    MovimentacaoController.show
    // #swagger.description = 'Obtem uma movimentação pelo ID'
    // #swagger.tags = ['Movimentações']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id da movimentação',
            required: true,
            type: 'integer' 
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Movimentacao"
           }
       }
    */
    /*
       #swagger.responses[404] = {
           schema: {
               msg: 'Movimentação não encontrada.'
           }
       }
    */
);

routes.post(
    '/movimentacoes',
    MovimentacaoController.store
    // #swagger.description = 'Criar uma nova movimentção'
    // #swagger.tags = ['Movimentações']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['movimentacao'] = {
            in: 'body',
            description: "Dados da movimentação",
            schema: {
                "$ref": "#/definitions/MovimentacaoCreate"
            }
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Movimentacao"
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
    '/movimentacoes/:id',
    MovimentacaoController.update
    // #swagger.description = 'Atualizar uma movimentacao'
    // #swagger.tags = ['Movimentações']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['movimentacao'] = {
            in: 'body',
            description: "Dados da movimentação",
            schema: {
                "$ref": "#/definitions/MovimentacaoUpdated"
            }
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/Movimentacao"
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
    '/movimentacoes/:id',
    MovimentacaoController.delete
    // #swagger.description = 'Deleta uma movimentação pelo ID'
    // #swagger.tags = ['Movimentações']
    // #swagger.security = [{JWT: []}]
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id da movimentação',
            required: true,
            type: 'integer' 
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/MovimentacaoDelete"
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
