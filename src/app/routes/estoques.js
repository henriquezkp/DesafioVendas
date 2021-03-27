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
<<<<<<< HEAD
<<<<<<< HEAD
);
=======
);

export default routes;
>>>>>>> aaa0771e2da1a160b7e779ab018a70aa15bd0f1d
=======
);

export default routes;
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9
