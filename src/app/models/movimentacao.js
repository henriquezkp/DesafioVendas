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
      id_motivo: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'motivos',
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
          model: 'estoqueTotal',
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
    this.belongsTo(models.Tipo, {
      foreignKey: 'id_tipo'
    });
    this.belongsTo(models.Produto, {
      foreignKey: 'id_produto'
    });

    this.belongsTo(models.EstoqueTotal, {
      foreignKey: 'id_estoque'
    });

    this.belongsTo(models.Motivo, {
      foreignKey: 'id_motivo'});
  }
}

export default Movimentacao;