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
    this.belongsTo(models.Produto);

    this.belongsTo(models.Estoque);

    this.belongsTo(models.Tipo);    
  }
}

export default Movimentacao;