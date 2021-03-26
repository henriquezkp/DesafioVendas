import { Router } from 'express';
import MovimentacaoController from '../controllers/movimentacaoController';

const routes = new Router();

routes.get(
    '/movimentacoes',
    MovimentacaoController.index
);

routes.get(
    '/movimentacoes/:id',
    MovimentacaoController.show
);

routes.post(
    '/movimentacoes',
    MovimentacaoController.store
);

routes.put(
    '/movimentacoes/:id',
    MovimentacaoController.update
);

routes.delete(
    '/movimentacoes/:id',
    MovimentacaoController.delete
);

export default routes;
