import Sequelize from 'sequelize';
import config from '../config/database';

import Devolucao from '../app/models/Devolucao';
import Movimentacao from '../app/models/Movimentacao';
import Produto from '../app/models/Produto';
import Categoria from '../app/models/Categoria';
import Motivo from '../app/models/Motivo';
import TiposDeMovimentacao from '../app/models/Tipo';
import Estoque from '../app/models/Estoque';
import EstoqueTotal from '../app/models/EstoqueTotal';


const models = [
    Categoria,
    Produto,
    Motivo,
    TiposDeMovimentacao,
    Movimentacao,
    Estoque,
    Devolucao,
    EstoqueTotal

];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();