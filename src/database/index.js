import Sequelize from 'sequelize';
import config from '../config/database';

import Devolucao from '../app/models/devolucao';
import Movimentacao from '../app/models/movimentacao';
import Produto from '../app/models/produto';
import Categoria from '../app/models/categoria';
import Motivo from '../app/models/motivo';
import TiposDeMovimentacao from '../app/models/tipo';
import Estoque from '../app/models/estoque';
import EstoqueTotal from '../app/models/estoqueTotal';

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