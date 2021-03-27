import sequelize from 'sequelize';
import Produto from '../models/Produto';
import Categoria from './../models/Categoria';

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