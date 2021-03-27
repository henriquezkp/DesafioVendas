import Sequelize, { Model } from 'sequelize';

class Motivo extends Model {
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
        tableName: 'motivos'
      });
    return this;
  }

  static associate(models){
    this.hasMany(models.Devolucao, {
      foreignKey: 'id'});
  }
}

export default Motivo;