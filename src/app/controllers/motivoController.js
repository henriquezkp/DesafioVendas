import Motivo from "../models/Motivo";

class motivoController {
    async index(req, res) {
        const motivos = await Motivo.findAll()
        return res.json(motivos);

    };

    async show(req, res) {
        const { id } = req.params;

        const motivo = await Motivo.findByPk(id, {
            where: { id: id },
        });

        return res.json(motivo);
    };

    async store(req, res) {
        const { nome } = req.body;

        const motivo = await Motivo.create({
            nome,
            created_at: new Date(),
        });

        return res.json(motivo);
    }

    async update(req, res) {
        const { id } = req.params;
        const { nome } = req.body;

        const motivo = await Motivo.update({
            nome,
            created_at: new Date(),
        }, {
            where: { id },
        });

        return res.json(motivo);
    }

    async delete(req, res) {
        const { id } = req.params;

        const motivo = await Motivo.destroy({
            where: { id },
            returning: true
        });

        return res.json(motivo);
    }
}

export default new motivoController();