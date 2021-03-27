import Produto from '../models/Produto';
import Categoria from './../models/Categoria';


class CategoriaController {
    async index(req, res) {
        const categorias = await Categoria.findAll({
            include: [
                {
                    model: Produto
                }
            ]
        });
        return res.status(200).json(categorias);
    }

    async store(req, res) {
        const { nome } = req.body;

        if (!nome) {
            return res.status(400).json({ message: "Dados inválidos"});
        };

        let tNome = nome.toUpperCase();

        const existente = await Categoria.findOne({
            where: { nome: tNome}
        });

        if (existente) {
            return res.status(400).json({ message: "Categoria já cadastrada"});
        } else {
            const categorias = await Categoria.create({
                nome: tNome
            });
            return res.status(200).json(categorias);
        }
    }

}

export default new CategoriaController();