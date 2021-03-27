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
<<<<<<< HEAD
    this.hasMany(models.Produto, {
      foreignKey: 'id'});
=======
<<<<<<< HEAD
    this.hasMany(models.Produto);
=======
    this.hasMany(models.Produto,
      {
        foreignKey: 'id_categoria'
      });
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9
>>>>>>> 1063830dca191c954fb1ac02fbda054b4ed565d8
  }
}

export default Categoria;