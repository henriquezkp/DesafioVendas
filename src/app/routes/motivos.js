import { Router } from 'express';
import MotivoController from '../controllers/motivoController';

const routes = new Router();

routes.get(
    '/motivos',
    MotivoController.index
);

routes.get(
    '/motivos/:id',
    MotivoController.show
);

routes.post(
    '/motivos',
    MotivoController.store
);

routes.put(
    '/motivos/:id',
    MotivoController.update
);

routes.delete(
    '/motivos/:id',
    MotivoController.delete
);

export default routes;
