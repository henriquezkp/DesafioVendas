import Sequelize, { Model } from 'sequelize';

class Devolucao extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
            id_motivo: {
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
        this.belongsTo(models.Produto, {
            foreignKey: 'id_produto'});

        this.belongsTo(models.Estoque,{
            foreignKey: 'id_estoque'
        });

        this.belongsTo(models.Motivo, {
            foreignKey: 'id_motivo'});

    }
};

export default Devolucao;