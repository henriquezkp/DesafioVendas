import express from 'express';
import dotenv from 'dotenv';
import './database/index';


///IMPORTANDO ROTAS
import RotasProdutos from './app/routes/produtos';
import RotasEstoques from './app/routes/estoques';
import RotasEstoqueTotal from './app/routes/estoqueTotal';
import RotasCategorias from './app/routes/categorias';
import RotasMovimentacoes from './app/routes/movimentacoes';
import RotasMotivos from './app/routes/motivos';
import RotasTipos from './app/routes/tiposMovimentacoes';
import RotasDocs from './app/routes/docs';

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
        this.server.use(RotasDocs);
        this.server.use(RotasCategorias);
        this.server.use(RotasEstoqueTotal);
        this.server.use(RotasEstoques);
        this.server.use(RotasProdutos);
        this.server.use(RotasMovimentacoes);
        this.server.use(RotasMotivos);
        this.server.use(RotasTipos);

    }

}

export default new App().server;