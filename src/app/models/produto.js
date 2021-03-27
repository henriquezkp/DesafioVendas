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
        this.belongsTo(models.Categoria,
            {
                as: 'Categorias',
                foreignKey: 'id_categoria'
            });
        this.hasMany(models.Movimentacao);
        this.hasMany(models.Devolucao);
        this.hasMany(models.EstoqueTotal);
    }
}

export default Produto;