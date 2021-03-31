import Sequelize, { Model } from 'sequelize';

class EstoqueTotal extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_estoque: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'estoques',
                    key: 'id'
                },
            },
            id_produto: {
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
        this.belongsTo(models.Estoque, {
            foreignKey: 'id_estoque'
        });
        this.belongsTo(models.Produto, {
            foreignKey: 'id_produto'
        });
    }
};

export default EstoqueTotal;