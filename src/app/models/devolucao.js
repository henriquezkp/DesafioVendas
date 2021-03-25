import Sequelize, { Model } from 'sequelize';

import Produto from './produto';
import Estoque from './estoque';
import Motivo from './motivo';

class Devolucao extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
            id_Motivo: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'motivos',
                    key: 'id'
                },
            },
            quantidade: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        },
            {
                sequelize,
                tableName: 'devolucoes'
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

        this.hasOne(Motivo, {
            foreignKey: 'id_Motivo',
        });

        Motivo.belongsTo(this, {
            foreignKey: 'id_Motivo',
        });
    }
};

export default Devolucao;