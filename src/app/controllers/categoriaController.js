import Produto from '../models/produto';
import Categoria from './../models/categoria';
import sequelize from 'sequelize';



class CategoriaController {
    async index(req, res) {
        const categorias = await Categoria.findAll({
            include: [
                {
                    model: Produto,
                    attributes:['nome']
                }
            ]
        });
        return res.status(200).json(categorias);
    }

    async show(req, res) {
        const {id}=req.params;
        
        const categoria = await Categoria.findByPk(id,{
            include: [
                {
                    model: Produto,
                    attributes:['nome']
                }
            ]
        });
        return res.status(200).json(categoria);
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