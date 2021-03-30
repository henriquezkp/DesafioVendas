import Sequelize, { Model } from 'sequelize';

class Estoque extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: Sequelize.STRING(100),
                allowNull: false
            }
        },
            {
                sequelize,
                tableName: 'estoques'
            });

        return this;
    }

    static associate(models) {
        this.hasMany(models.Movimentacao, {
            foreignKey: 'id_estoque'
        });
        this.hasMany(models.Devolucao, {
            foreignKey: 'id_estoque'
        });
        this.hasMany(models.EstoqueTotal, {
            foreignKey: 'id_estoque'
        });
    }
}

export default Estoque;