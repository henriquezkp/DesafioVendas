import express from 'express';
import dotenv from 'dotenv';

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
    }

}

export default new App().server;