import Sequelize, { Model } from 'sequelize';

import Produto from './produto';
import Estoque from './estoque'


class Movimentacao extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_Estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estoques',
          key: 'id'
        },
      },
      id_Produto: {
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

  static associate(sequelize) {
    this.belongsTo(Produto, {
      foreignKey: 'id_Produto',
    });

    Produto.hasMany(this, {
      foreignKey: 'id_Produto',
    });

    this.belongsTo(Estoque, {
      foreignKey: 'id_Estoque',
    });

    Estoque.hasMany(this, {
      foreignKey: 'id_Estoque',
    });
  }
}

export default Movimentacao;