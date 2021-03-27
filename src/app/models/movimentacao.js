import Sequelize, { Model } from 'sequelize';

class Movimentacao extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tiposDeMovimentacao',
          key: 'id'
        },
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    },
      {
        sequelize,
        tableName: 'movimentacoes'
      });

    return this;
  }

  static associate(models) {
<<<<<<< HEAD
    this.belongsTo(models.Produto, {
      foreignKey: 'id'});
=======
    this.belongsTo(models.Produto);
<<<<<<< HEAD

    this.belongsTo(models.Estoque);

    this.belongsTo(models.Tipo);

    
=======
>>>>>>> 1063830dca191c954fb1ac02fbda054b4ed565d8

    this.belongsTo(models.Estoque, {
      foreignKey: 'id'});

<<<<<<< HEAD
    this.belongsTo(models.Tipo, {
      foreignKey: 'id'});    
=======
    this.belongsTo(models.Tipo);    
>>>>>>> d9920414c5a6aa90e88aa78fb15823a924a885d9
>>>>>>> 1063830dca191c954fb1ac02fbda054b4ed565d8
  }
}

export default Movimentacao;