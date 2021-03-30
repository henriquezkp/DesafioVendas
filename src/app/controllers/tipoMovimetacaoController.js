import Tipo from '../models/tipo';
import sequelize from 'sequelize';

class TipoMovimentacaoController {

    async index(req, res) {
        const tipos = await Tipo.findAll()

        return res.json(tipos);
    };

    async show(req, res) {
        const { id } = req.params;

        const tipos = await Tipo.findByPk(id);

        return res.json(tipos);
    };

    async store(req, res) {
        const { nome } = req.body;

        if (!nome) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        let tNome = nome.toUpperCase();

        const existente = await Tipo.findOne({
            where: { nome: tNome }
        });

        if (existente) {
            return res.status(400).json({ message: 'Tipo de movimentação já cadastrado' });
        } else {
            const tipo = await Tipo.create({
                nome: tNome
            });
            return res.status(200).json(tipo);
        }

    }

    async update(req, res) {
        const { id } = req.params;
        const { nome } = req.body;

        let tNome = nome.toUpperCase();

        const tipos = await Tipo.findAll({
            where: { id }
        })

        if (tipos == "") {
            return res.status(404).json({ message: "ID não encontrado" })
        }

        const atualizar_tipos = await Tipo.update({
            nome: tNome
        }, {
            where: { id },
            returning: true
        });

        return res.status(200).json(atualizar_tipos);
    };

    async delete(req, res) {
        const { id } = req.params;

        const tipos = await Tipo.findAll({
            where: { id }
        })

        if (tipos == "") {
            return res.status(404).json({ message: "ID não encontrado" })
        }
        const linhas = await Tipo.destroy({
            where: { id },
            returning: true
        });

        return res.status(200).json(linhas, { message: "ID Excluido" });
    };

};

export default new TipoMovimentacaoController();