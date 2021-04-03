import sequelize from 'sequelize';

import Movimentacao from '../models/movimentacao';
import EstoqueTotal from '../models/estoqueTotal';
import Produto from '../models/produto';
import Motivo from '../models/motivo';

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

    async showBestSellingProduct(req, res) {
        const movement = await Movimentacao.findAll({
            where: { id_tipo: 1 },
            attributes: ['id_tipo', 'id_produto',
                [sequelize.fn('count', sequelize.col('id_produto')), 'vendas'],
            ],
            include: [
                {
                    model: Produto,
                    attributes: ['nome']
                }
            ],
            group: ['id_produto', 'Movimentacao.id_tipo', 'Produto.id'],
            order: [[sequelize.literal('vendas'), 'DESC']]

        });
        return res.status(200).json(movement)
    }

    async showMostReturnedReason(req, res) {
        const movement = await Movimentacao.findAll({
            where: { id_tipo: 2 },
            attributes: ['id_tipo', 'id_motivo',
                [sequelize.fn('count', sequelize.col('id_motivo')), 'motivos'],
            ],
            include: [
                {
                    model: Motivo,
                    attributes: ['nome']
                }
            ],
            group: ['id_motivo', 'Movimentacao.id_tipo', 'Motivo.id'],
            order: [[sequelize.literal('motivos'), 'DESC']]

        });
        return res.status(200).json(movement)
    }

    async store(req, res) {
        const { id_tipo, quantidade, id_estoque, id_produto, id_motivo } = req.body;

        if (!id_tipo | !quantidade | !id_estoque | !id_produto) {

            return res.status(400).json({ message: 'Dados Inválidos' });

        } else if (id_tipo === 2 && !id_motivo) {
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