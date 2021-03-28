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