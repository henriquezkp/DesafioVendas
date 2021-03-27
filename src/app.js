import express from 'express';
import dotenv from 'dotenv';
import './database/index';


///IMPORTANDO ROTAS
import RotasProdutos from './app/routes/produtos';
import RotasEstoques from './app/routes/estoques';
<<<<<<< HEAD
<<<<<<< HEAD
//import RotasCategorias from './app/routes/categorias';
=======
import RotasCategorias from './app/routes/categorias';
>>>>>>> aaa0771e2da1a160b7e779ab018a70aa15bd0f1d
=======
import RotasCategorias from './app/routes/categorias';
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9
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
<<<<<<< HEAD
=======
        this.server.use(RotasProdutos);
>>>>>>> aaa0771e2da1a160b7e779ab018a70aa15bd0f1d
=======
        this.server.use(RotasProdutos);
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9
    }

}

export default new App().server;