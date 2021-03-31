import { Router } from 'express';
import CategoriaController from '../controllers/categoriaController';

const routes = new Router();

routes.get(
    '/categorias',
    CategoriaController.index
    // #swagger.description = 'Listagem de Categorias'
    // #swagger.tags = ['Categorias']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeCategorias"
           }
       }
    */
);


routes.get(
    '/categorias/:id',
    CategoriaController.show
    // #swagger.description = 'Listagem de Categorias'
    // #swagger.tags = ['Categorias']
    /*
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id da categoria',
            required: true,
            type: 'integer' 
        }
    */
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeCategorias"
           }
       }
    */
   /*
       #swagger.responses[404] = {
           schema: {
               msg: 'Categoria não encontrada.'
           }
       }
    */
);

routes.post(
    '/categorias',
    CategoriaController.store
    // #swagger.description = 'Criar categoria'
    // #swagger.tags = ['Categorias']
    // #swagger.security = [{JWT: []}]
    /*
       #swagger.responses[200] = {
           schema: {
               "$ref": "#/definitions/ListaDeCategorias"
           }
       }
    */
);

export default routes;