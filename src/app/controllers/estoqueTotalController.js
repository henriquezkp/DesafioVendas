import sequelize from 'sequelize';
import EstoqueTotal from '../models/estoqueTotal';

class EstoqueTotalController {

    async index(req, res) {
        const estoqueTotal = await EstoqueTotal.findAll()

        return res.json(estoqueTotal);
    };

    async show(req, res) {
        const estoqueTotal = await EstoqueTotal.findAll()

        return res.json(estoqueTotal);
    };

    async store(req, res) {
        const { id_produto, id_estoque, quantidade } = req.body;

        if (!id_produto || !id_estoque || !quantidade) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        } else {

            const addEstoque = await EstoqueTotal.create({
                id_produto,
                id_estoque,
                quantidade
            });
            return res.status(200).json(addEstoque);

        }


    };

    async update(req, res) {

    }

    async delete(req, res) {

    }
}

export default new EstoqueTotalController();