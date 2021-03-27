import Devolucao from '../models/Devolucao';

class DevolucaoController {

    async index(req, res) {
        const devolucoes = await Devolucao.findAll();
        return res.json(devolucoes);
    };

    async show(req, res) {
        const { id } = req.params;

        const devolucao = await Devolucao.findByPk(id);

        return res.json(devolucao);
    };

    async store(req, res) {
        const { id_Estoque, id_Produto, id_Motivo, quantidade } = req.body;

        if (!id_Estoque || !id_Produto || !id_Motivo || !quantidade) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

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

        if (!id_Estoque || !id_Produto) {
            return res.status(400).json({ message: 'Para realizar a atualização, é necessario informar o ID do estoque e do produto' });
        }

        const devolucao = await Devolucao.update({
            id_Estoque,
            id_Produto,
            id_Motivo,
            quantidade
        }, {
            where: { id },
            returning: true            
        });

        return res.json(devolucao);
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