import Movimentacao from '../models/movimentacao';
import EstoqueTotal from '../models/estoqueTotal';

class MovimentacaoController {

    async index(req, res) {
        const movimentacao = await Movimentacao.findAll();
        return res.status(200).json(movimentacao);
    };


    async show(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Movimentação não encontrada' });
        };

        const movimentacao = await Movimentacao.findByPk(id);

        return res.status(200).json(movimentacao);
    };


    async store(req, res) {
        const { id_tipo, quantidade, id_estoque, id_produto, id_motivo } = req.body;

        if (!id_tipo | !quantidade | !id_estoque | !id_produto) {

            return res.status(400).json({ message: 'Dados Inválidos' });

        }else if (id_tipo===2 && !id_motivo){
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        const movimentacao = await Movimentacao.create({
            id_tipo,
            quantidade,
            id_estoque,
            id_produto,
            id_motivo
        });

        const saldo = await EstoqueTotal.findOne({
            where: {
                id_estoque,
                id_produto,
            }
        });

        switch (id_tipo) {
            case 1:
                await saldo.update({
                    id_estoque,
                    id_produto,
                    quantidade: saldo.quantidade - quantidade,
                });
                break;
            case 2:
                await saldo.update({
                    id_estoque,
                    id_produto,
                    quantidade: saldo.quantidade + quantidade,
                });
                break;
        }

        return res.status(200).json(movimentacao);
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

        return res.status(200).json(movimentacao);
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

        return res.status(200).json(movimentacao);
    }
}

export default new MovimentacaoController();