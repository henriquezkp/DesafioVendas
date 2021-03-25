import { Router } from 'express';
import MotivoController from '../controllers/motivoController';

const routes = new Router();

routes.get(
    '/motivos',
    MotivoController.index
);

routes.get(
    '/movimentacoes/:id',
    MotivoController.show
);

routes.post(
    '/movimentacoes',
    MotivoController.store
);

routes.put(
    '/movimentacoes/:id',
    MotivoController.update
);

routes.delete(
    '/movimentacoes/:id',
    MotivoController.delete
);