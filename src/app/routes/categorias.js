import { Router } from 'express';
import CategoriaController from '../controllers/categoriaController';

const routes = new Router();

routes.get(
    '/categorias',
    CategoriaController.index
);

routes.post(
    '/categorias',
    CategoriaController.store
);

export default routes;