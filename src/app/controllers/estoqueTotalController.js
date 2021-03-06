import sequelize from 'sequelize';
import EstoqueTotal from '../models/estoqueTotal';
import Produto from '../models/produto';

class EstoqueTotalController {

    async index(req, res) {
        const estoqueTotal = await EstoqueTotal.findAll({
            attributes:['id_estoque', 'id_produto',
            [sequelize.fn('sum', sequelize.col('quantidade')), 'total']
        ],
            include:[
                {
                    model:Produto,
                    attributes:['nome'],
                }
            ],
            group:['id_estoque', 'id_produto','Produto.id']
        });



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