import Estoque from '../models/estoque';
import sequelize from 'sequelize';

class EstoqueController {

    async index(req, res) {
        const data = await Estoque.findAll()

        return res.json(data);
    }


    async show (req, res) {
        const { id } = req.params;

        const estoque = await Estoque.findByPk(id);

        return res.json(estoque);

    }

    async store(req, res) {
        const { nome } = req.body;

        const criar_estoque = await Estoque.create({
            nome
        });

        return res.json(criar_estoque);

    }

    async update (req, res) {
        const { nome } = req.body;
        const { id } = req.params;

        const atualizar_estoque = await Estoque.update({
            nome
        },{
            where: { id },
            returning: true
        });

        return res.json(atualizar_estoque);


    }

    async delete(req, res) {
        const { id } = req.params;

        const linhas = await Estoque.destroy({
            where: { id },
            returning: true
        });

        return res.json(linhas);
    }



}

export default new EstoqueController();