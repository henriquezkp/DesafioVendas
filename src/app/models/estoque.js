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
            },
    
        },
        {
           sequelize,
           tableName: 'estoques'
        });

        return this;
    }

    static associate(models){
        this.hasMany(models.Movimentacao);
        this.hasMany(models.Devolucao);
        this.belongsTo(models.EstoqueTotal);
    }
}

export default Estoque;