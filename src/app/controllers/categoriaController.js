import sequelize from 'sequelize';

class CategoriaController {
    async index(req, res) {
        res.json('ok');
    }

}

export default new CategoriaController();