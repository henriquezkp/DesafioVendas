import Sequelize from 'sequelize';
import config from '../config/database';

<<<<<<< HEAD
import Devolucao from '../app/models/devolucao';
import Movimentacao from '../app/models/movimentacao';
import Produto from '../app/models/produto';
<<<<<<< HEAD
import Estoque from '../app/models/estoque';
=======
import Categoria from '../app/models/categoria';
import Motivo from '../app/models/motivo';
import TiposDeMovimentacao from '../app/models/tipo';
import Estoque from '../app/models/estoque';
import EstoqueTotal from '../app/models/estoqueTotal';
>>>>>>> aaa0771e2da1a160b7e779ab018a70aa15bd0f1d
=======
import Devolucao from '../app/models/Devolucao';
import Movimentacao from '../app/models/Movimentacao';
import Produto from '../app/models/Produto';
import Categoria from '../app/models/Categoria';
import Motivo from '../app/models/Motivo';
import TiposDeMovimentacao from '../app/models/Tipo';
import Estoque from '../app/models/Estoque';
import EstoqueTotal from '../app/models/EstoqueTotal';
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9

const models = [
    Categoria,
    Produto,
    Motivo,
    TiposDeMovimentacao,
    Movimentacao,
<<<<<<< HEAD
<<<<<<< HEAD
    Produto,
    Estoque
=======
    Estoque,
    Devolucao,
    EstoqueTotal
>>>>>>> aaa0771e2da1a160b7e779ab018a70aa15bd0f1d
=======
    Estoque,
    Devolucao,
    EstoqueTotal
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9
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