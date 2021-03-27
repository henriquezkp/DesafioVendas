import sequelize from 'sequelize';
import EstoqueTotal from '../models/EstoqueTotal';

class EstoqueTotalController {

    async index(res, req) {
        const estoqueTotal = await EstoqueTotal.findAll()

        return res.json(estoqueTotal);
    };

}

export default new EstoqueTotalController();