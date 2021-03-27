import express from 'express';
import dotenv from 'dotenv';
import './database/index';


///IMPORTANDO ROTAS
import RotasProdutos from './app/routes/produtos';
import RotasEstoques from './app/routes/estoques';
<<<<<<< HEAD
//import RotasCategorias from './app/routes/categorias';
=======
import RotasCategorias from './app/routes/categorias';
>>>>>>> aaa0771e2da1a160b7e779ab018a70aa15bd0f1d
import RotasDevolucoes from './app/routes/devolucoes';
//import RotasMovimentacoes from './app/routes/movimentacoes';

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
                ? '.env.test' : '.env',
        });
    }

    middlewares() {

    }

    routers() {
        //this.server.use(rota...)
        this.server.use(RotasCategorias);
        this.server.use(RotasDevolucoes);
        this.server.use(RotasEstoques);
<<<<<<< HEAD
=======
        this.server.use(RotasProdutos);
>>>>>>> aaa0771e2da1a160b7e779ab018a70aa15bd0f1d
    }

}

export default new App().server;