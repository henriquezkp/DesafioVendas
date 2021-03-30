import sequelize from 'sequelize';
import EstoqueTotal from '../models/estoqueTotal';

class EstoqueTotalController {

    async index(res, req) {
        const estoqueTotal = await EstoqueTotal.findAll()

        return res.json(estoqueTotal);
    };

}

export default new EstoqueTotalController();