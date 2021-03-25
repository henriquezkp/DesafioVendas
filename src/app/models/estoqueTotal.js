import Sequelize, { Model } from 'sequelize';

class EstoqueTotal extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_Estoque: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'estoques',
                    key: 'id'
                },
            },
            id_Produto: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'produtos',
                    key: 'id'
                },
            },
            quantidade: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        },
            {
                sequelize,
                tableName: 'estoqueTotal'
            });

        return this;
    }

    static associate(models) {
        this.hasMany(models.Estoque);
        this.hasMany(models.Produto);
    }
};

export default EstoqueTotal;