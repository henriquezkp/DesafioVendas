import express from 'express';
import dotenv from 'dotenv';

///IMPORTANDO ROTAS
import RotasProdutos from './app/routes/produtos';
import RotasEstoques from './app/routes/estoques';
import RotasCategorias from './app/routes/categorias';
import RotasDevolucoes from './app/routes/devolucoes';
import RotasMovimentacoes from './app/routes/movimentacoes';

class App {
    constructor() {
        this.server = express();
        this.config();
        this.middlewares();
        this.routers();
    }

    config() {
        this.server.use(express.json());

        dotenv.config({
            path: process.env.NODE_ENV === 'teste'
                ? '.env.test' : '.env'
        });
    }

    middlewares() {

    }

    routers() {
        //this.server.use(rota...)
        this.server.use(RotasProdutos);
    }

}

export default new App().server;