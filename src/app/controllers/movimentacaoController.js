import Movimentacao from '../models/movimentacao';

class MovimentacaoController {

    async index(req, res) {
        const movimentacao = await Movimentacao.findAll();
        return res.json(movimentacao);
    };

    async show(req, res) {
        const { id } = req.params;

        const movimentacao = await Movimentacao.findByPk(id);

        return res.json(movimentacao);
    };

    async store(req, res) {
        const { tipo, quantidade, id_Estoque, id_Produto } = req.body;

        const movimentacao = await Movimentacao.create({
            tipo,
            quantidade,
            id_Estoque,
            id_Produto,
        });

        return res.json(movimentacao);
    }

    async update(req, res) {
        const { id } = req.params;
        const { tipo, quantidade, id_Estoque, id_Produto } = req.body;

        const movimentacao = await Movimentacao.update({
            tipo,
            quantidade,
            id_Estoque,
            id_Produto,
        }, {
            where: { id },
            returning: true            
        });

        return res.json(movimentacao);
    }

    async delete(req, res) {
        const { id } = req.params;

        const movimentacao = await Movimentacao.destroy({
            where: { id },
            returning: true
        });

        return res.json(movimentacao);
    }
}

export default new MovimentacaoController();