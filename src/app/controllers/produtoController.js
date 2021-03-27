import Produto from '../models/Produto';

class ProdutoController {

    async index(req, res) {
        const produtos = await Produto.findAll({attributes:['id', 'nome', 'preco', 'id_categoria']}
        );
        return res.json(produtos);
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
<<<<<<< HEAD

        const existente = await Produto.findOne({
            where: { nome: tNome }
        });
=======
let existente = null;
        /*const existente = await Produto.findOne({
            where: { nome: tNome }
        });*/
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9

        if (existente) {
            return res.status(400).json({ message: 'Produto já cadastrado' });
        } else {
            const produto = await Produto.create({
                id_categoria,
                nome:tNome,
                preco,
            });
            return res.status(200).json(produto);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { id_categoria, nome, preco } = req.body;
        let tNome = nome.toUpperCase();
        
        const produto = await Produto.update({
            id_categoria,
            nome:tNome,
            preco
        },{
            where: {id}
        });
        return res.status(200).json(produto);
    }

    async delete(req, res) {
        const { id } = req.params;

        const linhas = await Produto.destroy({
            where: { id },
            returning: true
        });

        return res.status(200).json(linhas);
    }

}

export default new ProdutoController();