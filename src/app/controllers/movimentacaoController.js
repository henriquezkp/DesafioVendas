import Movimentacao from '../models/Movimentacao';

class MovimentacaoController {

    async index(req, res) {
        const movimentacao = await Movimentacao.findAll();
        return res.json(movimentacao);
    };


    async show(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Movimentação não encotrado' });
        };

        const movimentacao = await Movimentacao.findByPk(id);

        return res.json(movimentacao);
    };


    async store(req, res) {
        const { id_tipo, quantidade, id_estoque, id_produto } = req.body;

        if (!id_tipo | !quantidade | !id_estoque | !id_produto) {

            return res.status(400).json({ message: 'Dados Inválidos' });

        }

        const movimentacao = await Movimentacao.create({
            id_tipo,
            quantidade,
            id_estoque,
            id_produto,
        });

        return res.json(movimentacao);
    }


    async update(req, res) {
        const { id } = req.params;
        const { tipo, quantidade, id_estoque, id_produto } = req.body;

        const movimentacao = await Movimentacao.update({
            tipo,
            quantidade,
            id_estoque,
            id_produto,
        }, {
            where: { id },
            returning: true
        });

        return res.json(movimentacao);
    }

    async delete(req, res) {
        const { id } = req.params;

        if (!id) {

            return res.status(400).json({ message: 'Produto não encotrado' });

        }

        const movimentacao = await Movimentacao.destroy({
            where: { id },
            returning: true
        });

        return res.json(movimentacao);
    }
}

export default new MovimentacaoController();