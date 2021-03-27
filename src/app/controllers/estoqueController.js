import Estoque from '../models/Estoque';
import sequelize from 'sequelize';

class EstoqueController {

    async index(req, res) {
        const estoques = await Estoque.findAll()

        return res.json(estoques);
    }

    async show(req, res) {
        const { id } = req.params;

        const estoque = await Estoque.findByPk(id);

        return res.json(estoque);

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

        const atualizar_estoque = await Estoque.update({
            nome:tNome
        }, {
            where: { id },
            returning: true
        });

        return res.status(200).json(atualizar_estoque);


    }

    async delete(req, res) {
        const { id } = req.params;

        const linhas = await Estoque.destroy({
            where: { id },
            returning: true
        });

        return res.status(200).json(linhas);
    }

}

export default new EstoqueController();