import { Router } from 'express';
import EstoqueController from '../controllers/estoqueController';

const routes = new Router();

routes.get(
    '/estoques',
    EstoqueController.index
);

routes.get(
    '/estoques/:id',
    EstoqueController.show
);

routes.post(
    '/estoques',
    EstoqueController.store
);

routes.put(
    '/estoques/:id',
    EstoqueController.update
);

routes.delete(
    '/estoques/:id',
    EstoqueController.delete
);