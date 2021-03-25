import Sequelize, { Model } from 'sequelize';
import Movimentacao from './movimentacao'

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
            },
           
        },
        {
           sequelize,
           tableName: 'tiposDeMovimentação'
        });

        return this;
    }

    static associate(sequelize) {
        this.belongsTo(Movimentacao, {
            foreignKey: 'tipo'
        });

        Movimentacao.hasMany(Produto, {
            foreignKey: 'tipo'
        })
    }
}

export default Estoque;