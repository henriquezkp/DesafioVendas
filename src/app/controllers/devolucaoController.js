import Devolucao from '../models/devolucao';

class DevolucaoController {

    async index(req, res) {
        const devolucoes = await Estadio.findAll();
        return res.json(devolucoes);
    };

    async show(req, res) {
        const { id } = req.params;

        const devolucao = await Devolucao.findByPk(id);

        return res.json(devolucao);
    };

    async store(req, res) {
        const { id_Estoque, id_Produto, id_Motivo, quantidade } = req.body;

        const devolucao = await Devolucao.create({
            id_Estoque,
            id_Produto,
            id_Motivo,
            quantidade
        });

        return res.json(devolucao);
    }

    async update(req, res) {
        const { id } = req.params;
        const { id_Estoque, id_Produto, id_Motivo, quantidade} = req.body;

        const [linhas, objetos] = await Devolucao.update({
            id_Estoque,
            id_Produto,
            id_Motivo,
            quantidade
        }, {
            where: { id },
            returning: true            
        });

        return res.json({
            linhas,
            objetos
        });
    }

    async delete(req, res) {
        const { id } = req.params;

        const devolucao = await Devolucao.destroy({
            where: { id },
            returning: true
        });

        return res.json(devolucao);
    }
}

export default new DevolucaoController();