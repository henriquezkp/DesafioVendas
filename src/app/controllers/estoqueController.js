import Estoque from '../models/estoque';
import EstoqueTotal from '../models/estoqueTotal';
import sequelize from 'sequelize';
import Produto from '../models/produto';

class EstoqueController {

    async index(req, res) {
        const estoques = await Estoque.findAll({

            attributes: ['id', 'nome',
                [sequelize.fn('sum', sequelize.col('EstoqueTotals.id')), 'total']
            ],
            include: [{
                model: EstoqueTotal,
                attributes: [
                ],
                /*include: [{
                    model: Produto,
                    attributes: ['nome']
                }],*/

            }],
            group: ['Estoque.id', 'EstoqueTotals.id', 'EstoqueTotals->Produto.id']
        })

        return res.status(200).json(estoques);
    }

    async show(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Estoque não encontrado' });
        };


        const estoque = await Estoque.findByPk(id, {
            include: [{
                model: EstoqueTotal
            }]
        });

        return res.status(200).json(estoque);

    }

    async store(req, res) {
        const { nome } = req.body;


        if (!nome) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        let tNome = nome.toUpperCase();

        const existente = await Estoque.findOne({
            where: { nome: tNome }
        });

        if (existente) {
            return res.status(400).json({ message: 'Estoque já cadastrado' });
        } else {
            const estoque = await Estoque.create({
                nome: tNome
            });
            return res.status(200).json(estoque);
        }

    }

    async update(req, res) {
        const { nome } = req.body;
        const { id } = req.params;

        let tNome = nome.toUpperCase();

        const estoque = await Estoque.findByPk(id);

        if (!estoque) {
            return res.status(404).json({ message: "Estoque não encontrado" })
        }

        const atualizar_estoque = await Estoque.update({
            nome: tNome
        }, {
            where: { id },
            returning: true
        });

        return res.status(200).json(atualizar_estoque);
    };

    async delete(req, res) {
        const { id } = req.params;

        const linhas = await Estoque.destroy({
            where: { id },
            returning: true
        });

        return res.status(200).json(linhas);
    }

};

export default new EstoqueController();