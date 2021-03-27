import Sequelize, { Model } from 'sequelize';

class Categoria extends Model {
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
        tableName: 'categorias'
      });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Produto);
  }
}

export default Categoria;