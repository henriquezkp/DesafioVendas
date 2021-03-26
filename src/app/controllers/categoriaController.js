import sequelize from 'sequelize';
import Produto from '../models/produto';
import Categoria from './../models/categoria';

class CategoriaController {
    async index(req, res) {
        const categorias = await Categoria.findAll({
            include:[
                {
                    model: Produto
                }
            ]
        });
        return res.status(200).json(categorias);
    }

}

export default new CategoriaController();