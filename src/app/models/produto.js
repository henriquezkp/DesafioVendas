import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            id_categoria: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categorias',
                    key: 'id'
                }
            },
            nome: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            preco: {
                type: Sequelize.FLOAT(2)
            },
        },
            {
                sequelize,
                tableName: 'produtos'
            });

        return this;
    }

    static associate(models) {
<<<<<<< HEAD
        this.belongsTo(models.Categoria, {
            foreignKey: 'id'});
        this.hasMany(models.Movimentacao, {
            foreignKey: 'id'});
        this.hasMany(models.Devolucao, {
            foreignKey: 'id'});
        this.hasMany(models.EstoqueTotal, {
            foreignKey: 'id'});
=======
<<<<<<< HEAD
        this.belongsTo(models.Categoria);
=======
        this.belongsTo(models.Categoria,
            {
                as: 'Categorias',
                foreignKey: 'id_categoria'
            });
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9
        this.hasMany(models.Movimentacao);
        this.hasMany(models.Devolucao);
        this.hasMany(models.EstoqueTotal);
>>>>>>> 1063830dca191c954fb1ac02fbda054b4ed565d8
    }
}

export default Produto;