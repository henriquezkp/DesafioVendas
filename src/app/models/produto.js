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
        this.belongsTo(models.Categoria, {
            foreignKey: 'id'});
        this.hasMany(models.Movimentacao, {
            foreignKey: 'id'});
        this.hasMany(models.Devolucao, {
            foreignKey: 'id'});
        this.hasMany(models.EstoqueTotal, {
            foreignKey: 'id'});
    }
}

export default Produto;