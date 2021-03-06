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
            as: 'categorias',
            foreignKey: 'id_categoria'
        });
        this.hasMany(models.Movimentacao, {
            foreignKey: 'id_produto'
        });
        this.hasMany(models.EstoqueTotal, {
            foreignKey: 'id_produto'
        });
    }
}
export default Produto;