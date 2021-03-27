import sequelize from 'sequelize';
<<<<<<< HEAD
import Produto from '../models/produto';
import Categoria from './../models/categoria';
=======
import Produto from '../models/Produto';
import Categoria from './../models/Categoria';
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9

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