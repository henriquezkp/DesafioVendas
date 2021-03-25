import Produto from '../models/produto';

class ProdutoController {

    async index(req, res) {
        const t = await Produto.findAll();
        res.json(t);
    }


}

export default new ProdutoController();