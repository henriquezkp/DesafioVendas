import Sequelize, { Model } from 'sequelize';
import Movimentacao from './movimentacao'

class Tipo extends Model {
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
           tableName: 'tiposDeMovimentacao'
        });

        return this;
    }

    static associate(sequelize) {
        this.belongsTo(Movimentacao, {
            foreignKey: 'tipo'
        });

        Movimentacao.hasMany(Tipo, {
            foreignKey: 'tipo'
        })
    }
}

export default Tipo;