import Sequelize, { Model } from 'sequelize';
import Categoria from './categoria';


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
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            nome: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            preco: {
                type: Sequelize.FLOAT(2)
            },
        })
    }

    static associate(sequelize) {
        this.belongsTo(Categoria, {
            foreignKey: 'id_categoria'
        });

        Categoria.hasMany(Produto, {
            foreignKey: 'id_categoria'
        })
    }
}

export default Produto;