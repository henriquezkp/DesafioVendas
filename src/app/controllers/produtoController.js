import Produto from '../models/produto';

class ProdutoController {

    async index(req, res) {
        const t = await Produto.findAll();
        return res.json(t);
    }

    async show(req, res) {
        const { id } = req.params;

        const produto = await Produto.findByPk(id);

        return res.json(produto);
    }

    async store(req, res) {
        const { id_categoria, nome, preco } = req.body;

        if (!id_categoria || !nome || !preco) {
            return res.status(400).json({ message: 'Dados Inválidos' });
        }

        let tNome = nome.toUpperCase();

        const existente = await Produto.findOne({
            where: { tNome }
        });

        if (existente) {
            return res.status(400).json({ message: 'Produto já cadastrado' });
        } else {
            const produto = await Produto.create({
                id_categoria,
                tNome,
                preco,
            });
            return res.status(200).json(produto);
        }
    }

    async put(req, res) {
        const { id } = req.params;
        
        const t = await Produto.findAll();
        return res.json(t);
    }

    async delete(req, res) {
        const t = await Produto.findAll();
        return res.json(t);
    }

}

export default new ProdutoController();