import Sequelize, { Model } from 'sequelize';

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

    static associate(models) {
        this.hasMany(models.Produto);

        this.belongsTo(models.Estoque);

        this.hasOne(models.Motivo);

    }
};

export default Devolucao;