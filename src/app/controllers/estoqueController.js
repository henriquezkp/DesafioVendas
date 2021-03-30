import Estoque from '../models/estoque';
import sequelize from 'sequelize';

class EstoqueController {

    async index(req, res) {
        const estoques = await Estoque.findAll()

        return res.status(200).json(estoques);
    }

    async show(req, res) {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Estoque não encontrado' });
        };


        const estoque = await Estoque.findByPk(id);

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

        const estoques = await Estoque.findAll({
            where: { id }
        })

        if (estoques == "") {
            return res.status(404).json({ message: "ID não encontrado" })
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

        const estoques = await Estoque.findAll({
            where: { id }
        })

        if (estoques == "") {
            return res.status(404).json({ message: "ID não encontrado" })
        }
        const linhas = await Estoque.destroy({
            where: { id },
            returning: true
        });

        return res.status(200).json(linhas, { message: "ID Excluido" });
    };

};

export default new EstoqueController();