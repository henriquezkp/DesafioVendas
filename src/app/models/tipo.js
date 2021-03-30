import Sequelize, { Model } from 'sequelize';

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

    static associate(models){
        this.hasMany(models.Movimentacao, {
            foreignKey: 'id_tipo'});
    }
 
}

export default Tipo;