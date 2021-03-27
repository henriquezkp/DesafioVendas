import { Router } from 'express';
import TipoMovimentacaoController from '../controllers/tipoMovimetacaoController';

const routes = new Router();

routes.get(
    '/tipos',
    TipoMovimentacaoController.index
);

routes.get(
    '/tipos/:id',
    TipoMovimentacaoController.show
);

routes.post(
    '/tipos',
    TipoMovimentacaoController.store
);

routes.put(
    '/tipos/:id',
    TipoMovimentacaoController.update
);

routes.delete(
    '/tipos/:id',
    TipoMovimentacaoController.delete
);

export default routes;
